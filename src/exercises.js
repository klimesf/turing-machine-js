import populateTransitionTable from './populateTransitionTable'
import MachineStep from './MachineStep.js'
import {
    DIR_LEFT,
    DIR_RIGHT,
    BLANK
} from './consts.js'

let set301 = (transitionTable, machineState, reset, input) => {
    transitionTable = {
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
    machineState.transitionFunction = transitionTable
    machineState.states = [0, 1, 2, 3, 4]
    machineState.finalStates = [4]
    document.querySelector(".description").innerHTML = "This Turing Machine accepts <br/> L = {w | w = a<sup>i</sup>b<sup>j</sup>c<sup>k</sup>; i,j,k > 0}";
    input = ["a", "a", "b", "b", "c"]
    reset(input)
    populateTransitionTable(transitionTable, ["a", "b", "c", BLANK], machineState)
    return input
}

let set302 = (transitionTable, machineState, reset, input) => {
    transitionTable = {
        0: {
            "a": new MachineStep(1, BLANK, DIR_RIGHT)
        },
        1: {
            "a": new MachineStep(1, "a", DIR_RIGHT),
            "b": new MachineStep(1, "b", DIR_RIGHT),
            "c": new MachineStep(1, "c", DIR_RIGHT),
            "B": new MachineStep(2, BLANK, DIR_LEFT)
        },
        2: {
            "c": new MachineStep(3, BLANK, DIR_LEFT)
        },
        3: {
            "a": new MachineStep(3, "a", DIR_LEFT),
            "b": new MachineStep(3, "b", DIR_LEFT),
            "c": new MachineStep(3, "c", DIR_LEFT),
            "B": new MachineStep(4, BLANK, DIR_RIGHT)
        },
        4: {
            "a": new MachineStep(1, BLANK, DIR_RIGHT),
            "b": new MachineStep(5, BLANK, DIR_RIGHT)
        },
        5: {
            "b": new MachineStep(5, "b", DIR_RIGHT),
            "c": new MachineStep(5, "c", DIR_RIGHT),
            "B": new MachineStep(6, BLANK, DIR_LEFT)
        },
        6: {
            "c": new MachineStep(7, BLANK, DIR_LEFT)
        },
        7: {
            "b": new MachineStep(7, "b", DIR_LEFT),
            "c": new MachineStep(7, "c", DIR_LEFT),
            "B": new MachineStep(8, BLANK, DIR_RIGHT)
        },
        8: {
            "b": new MachineStep(5, BLANK, DIR_RIGHT),
            "B": new MachineStep(9, BLANK, DIR_RIGHT)
        },
        9: {}
    }
    machineState.transitionFunction = transitionTable
    machineState.states = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    machineState.finalStates = [9]
    document.querySelector(".description").innerHTML = "This Turing Machine accepts <br/> L = {w | w = a<sup>i</sup>b<sup>j</sup>c<sup>k</sup>; i,j,k > 0, i+j=k}";
    input = ["a", "a", "b", "b", "c", "c", "c", "c"]
    reset(input)
    populateTransitionTable(transitionTable, ["a", "b", "c", BLANK], machineState)
    return input
}

let set31 = (transitionTable, machineState, reset, input) => {
    transitionTable = {
        0: {
            "0": new MachineStep(1, "0", DIR_LEFT),
            "1": new MachineStep(1, "1", DIR_LEFT),
            "B": new MachineStep(7, "0", DIR_RIGHT)
        },
        1: {
            "B": new MachineStep(2, "X", DIR_RIGHT)
        },
        2: {
            "0": new MachineStep(3, "Y", DIR_LEFT),
            "1": new MachineStep(3, "Z", DIR_LEFT)
        },
        3: {
            "0": new MachineStep(3, "0", DIR_LEFT),
            "1": new MachineStep(3, "1", DIR_LEFT),
            "X": new MachineStep(3, "X", DIR_LEFT),
            "B": new MachineStep(4, "0", DIR_RIGHT)
        },
        4: {
            "0": new MachineStep(4, "0", DIR_RIGHT),
            "1": new MachineStep(4, "1", DIR_RIGHT),
            "X": new MachineStep(4, "X", DIR_RIGHT),
            "Y": new MachineStep(5, "0", DIR_RIGHT),
            "Z": new MachineStep(5, "1", DIR_RIGHT)
        },
        5: {
            "0": new MachineStep(3, "Y", DIR_LEFT),
            "1": new MachineStep(3, "Z", DIR_LEFT),
            "B": new MachineStep(6, "B", DIR_LEFT)
        },
        6: {
            "0": new MachineStep(6, "0", DIR_LEFT),
            "1": new MachineStep(6, "1", DIR_LEFT),
            "X": new MachineStep(7, "0", DIR_RIGHT)
        },
        7: {}
    }
    machineState.transitionFunction = transitionTable
    machineState.states = [0, 1, 2, 3, 4, 5, 6, 7]
    machineState.finalStates = [7]
    document.querySelector(".description").innerHTML = "This Turing Machine realizes function<br/> f(w) = 0<sup>k+1</sup>w, k = |w|";
    input = ["0", "1", "1"]
    reset(input)
    populateTransitionTable(transitionTable, ["0", "1", "X", "Y", "Z", BLANK], machineState)
    return input
}

export {
    set301,
    set302,
    set31
}
