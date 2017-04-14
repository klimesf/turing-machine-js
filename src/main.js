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
import populateTransitionTable from './populateTransitionTable'

var transitionTable = {
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
}

// Machine State init
// TODO: move to class and pass that around
var symbols = ["a", "b", "c", "B"]
var inputSymbols = ["a", "b", "c"]
var input = window.input || ["a", "a", "b", "b", "c"]
var machineState = new MachineState(
    [0, 1, 2, 3, 4], // States
    [4], // Final states
    0, // Head position
    0, // Initial State
    transitionTable, // Transition Function
    input.slice(), // State of the tape
)

let readyForEvent = true;

let reset = (input) => {
    // Reset machine state
    machineState.head = 0
    machineState.state = 0
    machineState.tape = input.slice()
    machineState.running = STATE_RUNNING

    // Remove state info
    let stateEl = document.querySelector('.state')
    stateEl.classList.remove("fail")
    stateEl.textContent = ""

    // Re-render the simulator
    render(new ViewState(DIR_RIGHT, undefined, machineState.tape, 0), true)
}

document.onkeypress = function(e) {
    if (e.code === "KeyR") {
        if (!readyForEvent) {
            return; // Animation in progress, do nothing
        }
        readyForEvent = false;
        reset(window.input || input)
        // Animation sync
        setTimeout(() => {readyForEvent = true}, 100)
        return
    }
    if (e.code === "Space") {
        if (!readyForEvent) {
            return; // Animation in progress, do nothing
        }
        if (machineState.running !== STATE_RUNNING) {
            return;
        }
        readyForEvent = false;

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
                stateEl.textContent = "Machine stopped unsuccessfully"
                break;
            case STATE_STOPPED_SUCCESS:
                machineState.running = STATE_STOPPED_SUCCESS
                stateEl = document.querySelector('.state')
                stateEl.classList.add("success")
                stateEl.textContent = "Machine stopped successfully"
                break;
            case STATE_RUNNING:
                let viewState = machineState.apply(machineStep)
                render(viewState)
                break;
            default:
                console.err("Unknown machine state")
        }

        // Animation sync
        setTimeout(() => {readyForEvent = true}, 100)
        return
    }
}

document.querySelector("#editor > a.banner").addEventListener("click", (e) => {
    let editorPane = document.querySelector("#editor");
    if (editorPane.classList.contains("active")) {
        editorPane.style.right = "-550px"
    } else {
        editorPane.style.right = "0"
    }
    editorPane.classList.toggle("active")
});

let machineInputEl = document.querySelector("#machine-input")
machineInputEl.value = input.join("")

let resetEl = document.querySelector("#reset")
resetEl.addEventListener("click", (e) => {
    e.preventDefault()
    resetEl.blur()
    let rawInput = input = document.querySelector("#machine-input").value
    if (rawInput === "tourette") {
        input = "fuck".split("")
        machineState = new MachineState(
            [0, 1, 2, 3, 4], // States
            [4], // Final states
            0, // Head position
            0, // Initial State
            {
                0: {
                    "f": new MachineStep(1, "s", DIR_RIGHT)
                },
                1: {
                    "u": new MachineStep(2, "h", DIR_RIGHT)
                },
                2: {
                    "c": new MachineStep(3, "i", DIR_RIGHT)
                },
                3: {
                    "k": new MachineStep(4, "t", DIR_RIGHT)
                }
            }, // Transition Function
            input.slice(), // State of the tape
        )
    } else {
        input = rawInput.split("")
    }
    reset(input)
})

// render(new ViewState(DIR_RIGHT, undefined, machineState.tape))
populateTransitionTable(transitionTable, symbols)

window.reset = reset
