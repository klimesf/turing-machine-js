(function() {
    let states = [0, 1, 2, 3]
    let finalStates = [3]
    let tape = ["0", "0", "1", "1"]
    let head = 0
    let state = 0
    let symbols = []
    let inputSymbols = []

    let highlight = undefined
    let direction = "right"

    let render = function() {
        let symbolsWrapper = document.querySelector(".symbols-wrapper")
        symbolsWrapper.innerHTML = ""

        let blankNode = document.createElement("div")
        blankNode.classList.add("symbol")
        blankNode.classList.add("blank")
        blankNode.textContent = "B"
        symbolsWrapper.appendChild(blankNode)

        tape.forEach((symbol, i) => {
            let symbolNode = document.createElement("div")
            symbolNode.classList.add("symbol")
            if (highlight !== undefined && highlight === i) {
              symbolNode.classList.add("highlight")
            }
            symbolNode.textContent = symbol
            symbolsWrapper.appendChild(symbolNode)
        })

        blankNode = document.createElement("div")
        blankNode.classList.add("symbol")
        blankNode.classList.add("blank")
        blankNode.textContent = "B"
        symbolsWrapper.appendChild(blankNode)
    }

    let touringMachine = function(state, states, finalStates, tape, head) {
        if (finalStates.indexOf(finalStates) > -1) {
            return "finished"
        }
    }

    let moveHead = function(direction) {
        let symbolsWrapper = document.querySelector(".symbols-wrapper")
        let translateX = parseInt(getComputedStyle(symbolsWrapper).transform.split(',')[4])
        translateX = (direction === 'right') ? translateX - 50 : translateX + 50

        symbolsWrapper.style.transform = 'translateX(' + translateX + 'px)'
    }

    document.onkeypress = function(e) {
        if (e.code === "Space") {

            // TODO: implement turing machine as a function
            // TODO: add turing machine states

            if (head >= tape.length - 1) {
                direction = "left"
            } else if (head <= 0) {
                direction = "right"
            }

            tape[head] = "X"
            highlight = head
            head += (direction === 'right') ? 1 : -1

            moveHead(direction)
            render()
        }
    }

    render()
})();
