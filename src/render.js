import {
    BLANK,
    DIR_RIGHT,
    DIR_LEFT
} from './consts.js'
import ViewState from './ViewState.js'

export default function(viewState, hard = false) {
    let symbolsWrapper = document.querySelector(".symbols-wrapper")
    symbolsWrapper.innerHTML = ""
    let width = viewState.tape.length * 50

    let currentStateEl = document.querySelector(".current-state")
    currentStateEl.innerHTML = `q<sub>${viewState.newState}</sub>`

    // Add first blank if not present
    //if (viewState.tape[0] !== BLANK) {
        width += 50
        let blankNode = document.createElement("div")
        blankNode.classList.add("symbol")
        blankNode.classList.add("blank")
        blankNode.textContent = BLANK
        symbolsWrapper.appendChild(blankNode)
    //}

    viewState.tape.forEach((symbol, i) => {
        let symbolNode = document.createElement("div")
        symbolNode.classList.add("symbol")
        if (viewState.highlight !== undefined && viewState.highlight === i) {
            symbolNode.classList.add("highlight")
        }
        symbolNode.textContent = symbol
        symbolsWrapper.appendChild(symbolNode)
    })

    // Add last blank if not present
    if (viewState.tape[viewState.tape.length - 1] !== BLANK) {
        width += 50
        blankNode = document.createElement("div")
        blankNode.classList.add("symbol")
        blankNode.classList.add("blank")
        blankNode.textContent = BLANK
        symbolsWrapper.appendChild(blankNode)
    }

    symbolsWrapper.style.width = width + "px"
    let translateX = parseInt(getComputedStyle(symbolsWrapper).transform.split(',')[4])
    if (translateX === -1 || hard) {
        translateX = width / 2 - 25
    }
    if (viewState.direction === DIR_RIGHT) {
        translateX -= 50
    } else if (viewState.direction === DIR_LEFT) {
        translateX += 50
    }
    symbolsWrapper.style.transform = 'translateX(' + translateX + 'px)'
}
