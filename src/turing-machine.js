import {
    STATE_RUNNING,
    STATE_STOPPED_FAIL,
    STATE_STOPPED_SUCCESS,
    BLANK
} from './consts'
import MachineStep from './MachineStep'

export default function(machineState) {
    let state = machineState.state
    let currentSymbol = BLANK
    if (machineState.head >= 0 && machineState.head < machineState.tape.length) {
        currentSymbol = machineState.tape[machineState.head]
    }
    let transitionFunction = machineState.transitionFunction[state]

    if (machineState.finalStates.indexOf(state) > -1) {
        console.log("Machine stopped successfuly")
        return {
            machineStep: null,
            running: STATE_STOPPED_SUCCESS
        }
    }
    if (!transitionFunction.hasOwnProperty(currentSymbol)) {
        console.log("Machine stopped because of undefined transition from the current state")
        return {
            machineStep: null,
            running: STATE_STOPPED_FAIL
        }
    }

    return {
        machineStep: transitionFunction[currentSymbol],
        running: STATE_RUNNING
    } // Returns the MachineStep
}
