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
import {
    set301,
    set302,
    set31,
    set32
} from './exercises.js'

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
    },
    4: {}
}

// Machine State init
// TODO: move to class and pass that around
var symbols = ["a", "b", "c", "B"]
var inputSymbols = ["a", "b", "c"]
var input = window.input || ["a", "a", "b", "b", "c"]
var states = [0, 1, 2, 3, 4]
var finalStates = [4]
var machineState = new MachineState(
    states, // States
    finalStates, // Final states
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

    // Reset machine input for good measure
    document.querySelector('#machine-input').value = input.join("")

    // Re-render the simulator
    render(new ViewState(DIR_RIGHT, undefined, machineState.tape, 0), true)
}

let rPressed = () => {
    if (!readyForEvent) {
        return; // Animation in progress, do nothing
    }
    readyForEvent = false;
    reset(input)
    // Animation sync
    setTimeout(() => {
        readyForEvent = true
    }, 100)
}

let spacePressed = () => {
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
    setTimeout(() => {
        readyForEvent = true
    }, 100)
}

document.onkeypress = function(e) {
    if (e.code === "KeyR") {
        rPressed()
    }
    if (e.code === "Space") {
        spacePressed()
    }
}


document.querySelector("a#r").addEventListener("click", (e) => {
    e.preventDefault()
    rPressed()
})

document.querySelector("a#space").addEventListener("click", (e) => {
    e.preventDefault()
    spacePressed()
})

document.querySelector("#editor > a.banner").addEventListener("click", (e) => {
    let editorPane = document.querySelector("#editor");
    if (editorPane.classList.contains("active")) {
        editorPane.style.right = "-750px"
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
        states = [0, 1, 2, 3, 4]
        finalStates = [4]
        symbols = ["f", "u", "c", "k"]
        transitionTable = {
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
        }
        machineState = new MachineState(
            states, // States
            finalStates, // Final states
            0, // Head position
            0, // Initial State
            transitionTable, // Transition Function
            input.slice(), // State of the tape
        )
    } else {
        input = rawInput.split("")
        symbols = input.reduce((acc, symbol) => {
            if (acc.indexOf(symbol) < 0) {
                acc.push(symbol)
            }
            return acc
        }, [])
    }
    symbols.push(BLANK)
    reset(input)
    populateTransitionTable(transitionTable, symbols, machineState)
})

document.querySelector("#add-state").addEventListener("click", (e) => {
    e.preventDefault()
    let newState = states.reduce((max, val) => {
        return val > max ? val : max
    }, 0) + 1
    states.push(newState)
    transitionTable[newState] = {}
    machineState.transitionTable = transitionTable
    machineState.finalStates = [newState]
    populateTransitionTable(transitionTable, symbols, machineState)
})

switch (window.location.hash) {
    case "#cv31":
        input = set31(transitionTable, machineState, reset)
        break
    case "#cv32":
        input = set32(transitionTable, machineState, reset)
        break
    case "#cv302":
        input = set302(transitionTable, machineState, reset)
        break
    case "#cv301":
    default:
        input = set301(transitionTable, machineState, reset)
        // render(new ViewState(DIR_RIGHT, undefined, machineState.tape))
        populateTransitionTable(transitionTable, symbols, machineState)
}


document.querySelector("a#cv301").addEventListener("click", (e) => {
    input = set301(transitionTable, machineState, reset, input)
})

document.querySelector("a#cv302").addEventListener("click", (e) => {
    input = set302(transitionTable, machineState, reset, input)
})

document.querySelector("a#cv31").addEventListener("click", (e) => {
    input = set31(transitionTable, machineState, reset, input)
})

document.querySelector("a#cv32").addEventListener("click", (e) => {
    input = set32(transitionTable, machineState, reset, input)
})

window.reset = reset
