import {DIR_LEFT, DIR_RIGHT} from './consts.js'
import render from './render'
import turingMachine from './turing-machine'
import MachineState from './MachineState'
import ViewState from './ViewState'

// Machine State init
// TODO: move to class and pass that around
let machineState = new MachineState(
    [0, 1, 2, 3],         // States
    [3],                  // Final states
    0,                    // Head position
    0,                    // Initial State
    [],                   // Transition Function
    ["0", "0", "1", "1"], // State of the tape
)

let symbols = []        // TODO: ???
let inputSymbols = []   // TODO: ???

// Visualization state init
// TODO: move to class and pass that around
let viewState = new ViewState(DIR_RIGHT, undefined, machineState.tape)

let moveHead = function(direction) {
    let symbolsWrapper = document.querySelector(".symbols-wrapper")
    let translateX = parseInt(getComputedStyle(symbolsWrapper).transform.split(',')[4])
    translateX = (direction === DIR_RIGHT) ? translateX - 50 : translateX + 50

    symbolsWrapper.style.transform = 'translateX(' + translateX + 'px)'
}

document.onkeypress = function(e) {
    if (e.code === "Space") {

        // TODO: implement turing machine as a function
        // TODO: add turing machine states

        if (machineState.head >= machineState.tape.length - 1) {
            viewState.direction = DIR_LEFT
        } else if (machineState.head <= 0) {
            viewState.direction = DIR_RIGHT
        }

        machineState.tape[machineState.head] = "X"
        viewState.highlight = machineState.head
        machineState.head += (viewState.direction === DIR_RIGHT) ? 1 : -1
        viewState.tape = machineState.tape

        moveHead(viewState.direction)
        render(viewState)
    }
}

render(viewState)
