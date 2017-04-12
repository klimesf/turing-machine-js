export default function(viewState) {
    let symbolsWrapper = document.querySelector(".symbols-wrapper")
    symbolsWrapper.innerHTML = ""

    let blankNode = document.createElement("div")
    blankNode.classList.add("symbol")
    blankNode.classList.add("blank")
    blankNode.textContent = "B"
    symbolsWrapper.appendChild(blankNode)

    viewState.tape.forEach((symbol, i) => {
        let symbolNode = document.createElement("div")
        symbolNode.classList.add("symbol")
        if (viewState.highlight !== undefined && viewState.highlight === i) {
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
