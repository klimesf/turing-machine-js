import MachineStep from './MachineStep'


/**
 * Populates the transition table in editor with current Turing Machine description.
 */
export default function(transitionTable, symbols, machineState) {
    let states = []
    let transitionTableHeadEl = document.querySelector(".transition-table > thead")
    let transitionTableHeadRowEl = document.createElement("tr")
    transitionTableHeadRowEl.innerHTML = ""
    for (var state in transitionTable) {
        if (!transitionTable.hasOwnProperty(state)) {
            continue;
        }
        states.push(state)
    }
    states.pop() // Dont display final state
    transitionTableHeadEl.appendChild(transitionTableHeadRowEl)

    // Top left corner of table
    let headerCol = document.createElement("th")
    headerCol.textContent = "-"
    transitionTableHeadRowEl.appendChild(headerCol)

    // For each symbol, add header column
    symbols.forEach((symbol) => {
        let headerCol = document.createElement("th")
        headerCol.textContent = symbol
        transitionTableHeadRowEl.appendChild(headerCol)
    })

    let transitionTableBodyEl = document.querySelector(".transition-table > tbody")
    transitionTableBodyEl.innerHTML = ""
    states.forEach((state) => {
        if (!transitionTable.hasOwnProperty(state)) {
            return;
        }
        let stateRow = document.createElement("tr")

        // Create row header - name of the state
        let rowHeader = document.createElement("th")
        rowHeader.innerHTML = `q<sub>${state}</sub>`
        stateRow.appendChild(rowHeader)

        symbols.forEach((symbol) => {
            let col = document.createElement("td")
            if (transitionTable[state].hasOwnProperty(symbol)) {
                let step = transitionTable[state][symbol]
                let nextState = step.nextState < states.length ? step.nextState : "F"
                col.innerHTML = `q<sub>${nextState}</sub>` +
                    `<span>|</span>${step.rewrite}` +
                    `<span>|</span>${step.direction}`
            }
            col.dataset.state = state
            col.dataset.symbol = symbol
            col.classList.add("transition")
            stateRow.appendChild(col)
        })

        // Append the row
        transitionTableBodyEl.appendChild(stateRow)
    })

    let addInputListener = (col) => {
        col.addEventListener("click", (e) => {
            if (!col.classList.contains("editing")) {
                let content = col.textContent.length > 0 ? col.textContent : ""
                col.innerHTML = `<input value="${content}" type="text"/>`
                col.classList.add("editing")
                document.querySelector("#set-transitions").style.display = "inline"
            }
        })
    }
    document.querySelectorAll("td.transition").forEach(col => addInputListener(col))

    document.querySelector("#set-transitions").addEventListener("click", (e) => {
        e.preventDefault()
        document.querySelectorAll("td.transition").forEach((col) => {
            let inputEl = col.querySelector("input")
            if (inputEl) {
                if (!transitionTable.hasOwnProperty(col.dataset.state)) {
                    transitionTable[col.dataset.state] = {}
                }
                if (!transitionTable[col.dataset.state].hasOwnProperty[col.dataset.symbol]) {
                    transitionTable[col.dataset.state][col.dataset.symbol] = {}
                }
                let [newState, rewrite, direction] = inputEl.value.split("|")
                newState = newState.replace("q", "")
                transitionTable[col.dataset.state][col.dataset.symbol] = new MachineStep(parseInt(newState), rewrite, direction)

                col.classList.remove("editing")
                col.innerHTML = inputEl.value
                addInputListener(col)
            }
        })
        machineState.transitionTable = transitionTable
    })
}
