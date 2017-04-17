import populateTransitionTable from './populateTransitionTable'
import MachineStep from './MachineStep.js'
import {
    DIR_LEFT,
    DIR_RIGHT,
    BLANK
} from './consts.js'

let set71 = (transitionTable, machineState, reset) => {
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
    reset(["a", "a", "b", "b", "c"])
    populateTransitionTable(transitionTable, ["a", "b", "c", BLANK], machineState)
}

let set72 = (transitionTable, machineState, reset) => {
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
    reset(["a", "a", "b", "b", "c", "c", "c", "c"])
    populateTransitionTable(transitionTable, ["a", "b", "c", BLANK], machineState)
}

export {set71, set72}
