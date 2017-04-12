import {
    DIR_LEFT,
    DIR_RIGHT,
    STATE_STOPPED_SUCCESS,
    STATE_STOPPED_FAIL,
    STATE_RUNNING,
    BLANK
} from './consts.js'
import render from './render'
import turingMachine from './turing-machine'
import MachineState from './MachineState'
import MachineStep from './MachineStep'
import ViewState from './ViewState'

// Machine State init
// TODO: move to class and pass that around
let machineState = new MachineState(
    [0, 1, 2, 3, 4], // States
    [4], // Final states
    0, // Head position
    0, // Initial State
    {
        0: {
            "a": new MachineStep(1, "a", DIR_RIGHT)
        },
        1: {
            "a": new MachineStep(1, "a", DIR_RIGHT),
            "b": new MachineStep(2, "b", DIR_RIGHT)
        },
        2: {
            "b": new MachineStep(2, "b", DIR_RIGHT),
            "c": new MachineStep(3, "c", DIR_RIGHT)
        },
        3: {
            "c": new MachineStep(3, "c", DIR_RIGHT),
            "B": new MachineStep(4, BLANK, DIR_LEFT)
        }
    }, // Transition Function
    window.input || ["a", "a", "b", "c"], // State of the tape
)

let symbols = [] // TODO: ???
let inputSymbols = [] // TODO: ???

document.onkeypress = function(e) {
    if (e.code === "Space") {

        if (machineState.running !== STATE_RUNNING) {
            return;
        }

        const {
            machineStep,
            running
        } = turingMachine(machineState)

        let stateEl = null
        switch (running) {
            case STATE_STOPPED_FAIL:
                machineState.running = STATE_STOPPED_FAIL
                stateEl = document.querySelector('.state')
                stateEl.classList.add("fail")
                stateEl.textContent = "Machine stopped unsuccessfuly"
                break;
            case STATE_STOPPED_SUCCESS:
                machineState.running = STATE_STOPPED_SUCCESS
                stateEl = document.querySelector('.state')
                stateEl.classList.add("success")
                stateEl.textContent = "Machine stopped successfuly"
                break;
            case STATE_RUNNING:
                let viewState = machineState.apply(machineStep)
                render(viewState)
                break;
            default:
                console.err("Unknown machine state")
        }
    }
}

render(new ViewState(DIR_RIGHT, undefined, machineState.tape))
