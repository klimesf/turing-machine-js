import {
    BLANK,
    DIR_RIGHT,
    DIR_LEFT
} from './consts.js'
import ViewState from './ViewState.js'

/**
 * Renders the Turing Machine and all its components, i.e., the tape
 * and the descriptions of current TM state.
 */
export default function(viewState, hard = false) {
    let symbolsWrapper = document.querySelector(".symbols-wrapper")
    symbolsWrapper.innerHTML = ""
    let width = viewState.tape.length * 50

    let currentStateEl = document.querySelector(".current-state")
    currentStateEl.innerHTML = `q<sub>${viewState.newState}</sub>`

    // Propagate current state to SVG cursor
    let svgTextEl = document.querySelector("svg > text")
    svgTextEl.innerHTML = `q<tspan dy="+5">${viewState.newState}</tspan>`

    // Add first blank if not present
    width += 50
    let blankNode = document.createElement("div")
    blankNode.classList.add("symbol")
    blankNode.classList.add("blank")
    blankNode.textContent = BLANK
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

    // Add last blank if not present
    width += 50
    blankNode = document.createElement("div")
    blankNode.classList.add("symbol")
    blankNode.classList.add("blank")
    blankNode.textContent = BLANK
    symbolsWrapper.appendChild(blankNode)

    symbolsWrapper.style.width = width + "px"
    let translateX = parseInt(getComputedStyle(symbolsWrapper).transform.split(',')[4])
    if (translateX === -1 || hard) {
        translateX = width / 2 - 25
    }
    if (viewState.direction === DIR_RIGHT) {
        if (viewState.added) {
            translateX -= 25
        }
        translateX -= 50
    } else if (viewState.direction === DIR_LEFT) {
        if (viewState.added) {
            translateX += 25
        }
        translateX += 50
    }
    symbolsWrapper.style.transform = 'translateX(' + translateX + 'px)'
}
