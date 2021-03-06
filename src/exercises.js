import populateTransitionTable from './populateTransitionTable'
import MachineStep from './MachineStep.js'
import {
    DIR_LEFT,
    DIR_RIGHT,
    BLANK
} from './consts.js'


/*
 * This file contains different Turing Machines based on exercises from B4M36TAL class.
 */

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

let set303 = (transitionTable, machineState, reset, input) => {
    transitionTable = {
        0: {
            "a": new MachineStep(1, "B", DIR_RIGHT),
            "b": new MachineStep(0, "B", DIR_RIGHT),
            "B": new MachineStep(6, "B", DIR_RIGHT)
        },
        1: {
            "a": new MachineStep(1, "a", DIR_RIGHT),
            "b": new MachineStep(2, "X", DIR_RIGHT)
        },
        2: {
            "b": new MachineStep(2, "b", DIR_RIGHT),
            "c": new MachineStep(2, "c", DIR_RIGHT),
            "B": new MachineStep(3, "B", DIR_LEFT)
        },
        3: {
            "c": new MachineStep(4, "B", DIR_LEFT)
        },
        4: {
            "b": new MachineStep(5, "b", DIR_LEFT),
            "c": new MachineStep(4, "c", DIR_LEFT),
            "X": new MachineStep(5, "b", DIR_LEFT)
        },
        5: {
            "a": new MachineStep(5, "a", DIR_LEFT),
            "b": new MachineStep(5, "b", DIR_LEFT),
            "X": new MachineStep(1, "b", DIR_RIGHT),
            "B": new MachineStep(0, "B", DIR_RIGHT)
        },
        6: {}
    }
    machineState.transitionFunction = transitionTable
    machineState.states = [0, 1, 2, 3, 4, 5, 6]
    machineState.finalStates = [6]
    document.querySelector(".description").innerHTML = "This Turing Machine accepts <br/> L = {w | w = a<sup>i</sup>b<sup>j</sup>c<sup>k</sup>; i,j,k > 0, i*j=k}";
    input = ["a", "a", "b", "b", "c", "c", "c", "c"]
    reset(input)
    populateTransitionTable(transitionTable, ["a", "b", "c", "X", BLANK], machineState)
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

let set32 = (transitionTable, machineState, reset, input) => {
    transitionTable = {
        0: {
            "0": new MachineStep(1, "a", DIR_RIGHT),
            "1": new MachineStep(1, "b", DIR_RIGHT),
            "X": new MachineStep(4, "X", DIR_RIGHT),
            "Y": new MachineStep(4, "Y", DIR_RIGHT),
            "B": new MachineStep(6, "B", DIR_RIGHT)
        },
        1: {
            "0": new MachineStep(1, "0", DIR_RIGHT),
            "1": new MachineStep(1, "1", DIR_RIGHT),
            "X": new MachineStep(2, "X", DIR_LEFT),
            "Y": new MachineStep(2, "Y", DIR_LEFT),
            "B": new MachineStep(2, "B", DIR_LEFT)
        },
        2: {
            "0": new MachineStep(3, "X", DIR_LEFT),
            "1": new MachineStep(3, "Y", DIR_LEFT),
            "a": new MachineStep(4, "X", DIR_RIGHT),
            "b": new MachineStep(4, "Y", DIR_RIGHT),
        },
        3: {
            "0": new MachineStep(3, "0", DIR_LEFT),
            "1": new MachineStep(3, "1", DIR_LEFT),
            "a": new MachineStep(0, "0", DIR_RIGHT),
            "b": new MachineStep(0, "1", DIR_RIGHT),
        },
        4: {
            "X": new MachineStep(4, "X", DIR_RIGHT),
            "Y": new MachineStep(4, "X", DIR_RIGHT),
            "B": new MachineStep(5, "B", DIR_LEFT)
        },
        5: {
            "0": new MachineStep(6, "0", DIR_LEFT),
            "1": new MachineStep(6, "1", DIR_LEFT),
            "a": new MachineStep(6, "0", DIR_LEFT),
            "b": new MachineStep(6, "1", DIR_LEFT),
            "X": new MachineStep(5, "B", DIR_LEFT),
            "Y": new MachineStep(5, "B", DIR_LEFT)
        },
        6: {}
    }
    machineState.transitionFunction = transitionTable
    machineState.states = [0, 1, 2, 3, 4, 5, 6]
    machineState.finalStates = [6]
    document.querySelector(".description").innerHTML = "This Turing Machine realizes function<br/> f(a<sub>1</sub>a<sub>1</sub>..a<sub>n</sub>) = a<sub>1</sub>a<sub>1</sub>..a<sub>k</sub>, k = floor(n/2)";
    input = ["0", "1", "1", "0", "1"]
    reset(input)
    populateTransitionTable(transitionTable, ["0", "1", "a", "b", "X", "Y", BLANK], machineState)
    return input
}

let set33 = (transitionTable, machineState, reset, input) => {
    transitionTable = {
        0: {
            "a": new MachineStep(0, "a", DIR_RIGHT),
            "b": new MachineStep(0, "b", DIR_RIGHT),
            "c": new MachineStep(1, "Z", DIR_RIGHT)
        },
        1: {
            "a": new MachineStep(1, "a", DIR_RIGHT),
            "b": new MachineStep(2, "c", DIR_LEFT),
            "c": new MachineStep(1, "c", DIR_RIGHT),
            "B": new MachineStep(3, "B", DIR_LEFT)
        },
        2: {
            "a": new MachineStep(2, "a", DIR_LEFT),
            "b": new MachineStep(2, "b", DIR_LEFT),
            "c": new MachineStep(2, "c", DIR_LEFT),
            "Z": new MachineStep(0, "b", DIR_RIGHT)
        },
        3: {
            "a": new MachineStep(3, "a", DIR_LEFT),
            "b": new MachineStep(3, "b", DIR_LEFT),
            "c": new MachineStep(3, "c", DIR_LEFT),
            "Z": new MachineStep(3, "c", DIR_LEFT),
            "B": new MachineStep(4, "B", DIR_RIGHT),
        },
        4: {
            "a": new MachineStep(4, "a", DIR_RIGHT),
            "b": new MachineStep(5, "Y", DIR_RIGHT),
            "c": new MachineStep(4, "c", DIR_RIGHT)
        },
        5: {
            "a": new MachineStep(6, "b", DIR_LEFT),
            "b": new MachineStep(5, "b", DIR_RIGHT),
            "c": new MachineStep(5, "c", DIR_RIGHT),
            "B": new MachineStep(7, "B", DIR_LEFT)
        },
        6: {
            "a": new MachineStep(6, "a", DIR_LEFT),
            "b": new MachineStep(6, "b", DIR_LEFT),
            "c": new MachineStep(6, "c", DIR_LEFT),
            "Y": new MachineStep(4, "a", DIR_RIGHT)
        },
        7: {
            "a": new MachineStep(7, "a", DIR_LEFT),
            "b": new MachineStep(7, "b", DIR_LEFT),
            "c": new MachineStep(7, "c", DIR_LEFT),
            "Y": new MachineStep(7, "b", DIR_LEFT),
            "B": new MachineStep(8, "B", DIR_RIGHT)
        },
        8: {
            "a": new MachineStep(8, "a", DIR_RIGHT),
            "b": new MachineStep(8, "b", DIR_RIGHT),
            "c": new MachineStep(9, "Z", DIR_RIGHT)
        },
        9: {
            "a": new MachineStep(9, "a", DIR_RIGHT),
            "b": new MachineStep(10, "c", DIR_LEFT),
            "c": new MachineStep(9, "c", DIR_RIGHT),
            "B": new MachineStep(11, "B", DIR_LEFT)
        },
        10: {
            "a": new MachineStep(10, "a", DIR_LEFT),
            "b": new MachineStep(10, "b", DIR_LEFT),
            "c": new MachineStep(10, "c", DIR_LEFT),
            "Z": new MachineStep(8, "b", DIR_RIGHT)
        },
        11: {
            "a": new MachineStep(11, "a", DIR_LEFT),
            "b": new MachineStep(11, "b", DIR_LEFT),
            "c": new MachineStep(11, "c", DIR_LEFT),
            "Z": new MachineStep(11, "c", DIR_LEFT),
            "B": new MachineStep(12, "B", DIR_RIGHT),
        },
        12: {}
    }
    machineState.transitionFunction = transitionTable
    machineState.states = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    machineState.finalStates = [12]
    document.querySelector(".description").innerHTML = "This Turing Machine realizes function<br/> f(w) = a<sub>k</sub>b<sub>l</sub>c<sub>m</sub>, k = |w|<sub>a</sub>, L = |w|<sub>l</sub>, m = |w|<sub>m</sub>";
    input = ["a", "c", "b", "a", "c", "a", "b", "c"]
    reset(input)
    populateTransitionTable(transitionTable, ["a", "b", "c", "X", "Y", "Z", BLANK], machineState)
    return input
}


let set34 = (transitionTable, machineState, reset, input) => {
    transitionTable = {
        0: {
            "0": new MachineStep(0, "0", DIR_RIGHT),
            "1": new MachineStep(0, "1", DIR_RIGHT),
            "B": new MachineStep(1, "S", DIR_LEFT)
        },
        1: {
            "0": new MachineStep(1, "0", DIR_LEFT),
            "1": new MachineStep(1, "1", DIR_LEFT),
            "B": new MachineStep(2, "B", DIR_RIGHT)
        },
        2: {
            "0": new MachineStep(3, "B", DIR_RIGHT),
            "1": new MachineStep(9, "B", DIR_RIGHT),
        },
        3: {
            "0": new MachineStep(3, "0", DIR_RIGHT),
            "1": new MachineStep(4, "1", DIR_RIGHT)
        },
        4: {
            "0": new MachineStep(5, "X", DIR_RIGHT),
            "1": new MachineStep(8, "1", DIR_LEFT),
            "S": new MachineStep(8, "S", DIR_LEFT),
        },
        5: {
            "0": new MachineStep(5, "0", DIR_RIGHT),
            "1": new MachineStep(5, "1", DIR_RIGHT),
            "S": new MachineStep(6, "S", DIR_RIGHT)
        },
        6: {
            "0": new MachineStep(6, "0", DIR_RIGHT),
            "B": new MachineStep(7, "0", DIR_LEFT)
        },
        7: {
            "0": new MachineStep(7, "0", DIR_LEFT),
            "1": new MachineStep(7, "1", DIR_LEFT),
            "S": new MachineStep(7, "S", DIR_LEFT),
            "X": new MachineStep(4, "0", DIR_RIGHT),
        },
        8: {
            "0": new MachineStep(8, "0", DIR_LEFT),
            "1": new MachineStep(8, "1", DIR_LEFT),
            "B": new MachineStep(2, "B", DIR_RIGHT),
        },
        9: {
            "0": new MachineStep(9, "B", DIR_RIGHT),
            "1": new MachineStep(9, "B", DIR_RIGHT),
            "S": new MachineStep(10, "B", DIR_RIGHT),
        },
        10: {}
    }
    machineState.transitionFunction = transitionTable
    machineState.states = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    machineState.finalStates = [10]
    document.querySelector(".description").innerHTML = "This Turing Machine realizes function<br/> f(m,n) = m*n, number x is represented as 0<sup>x</sup>1";
    input = ["0", "0", "1", "0", "0", "1"]
    reset(input)
    populateTransitionTable(transitionTable, ["0", "1", "X", "S", BLANK], machineState)
    return input
}

export {
    set301,
    set302,
    set303,
    set31,
    set32,
    set33,
    set34
}
