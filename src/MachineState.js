import {
    STATE_RUNNING,
    DIR_LEFT
} from './consts'
import ViewState from './ViewState'

export default class MachineState {

    constructor(states, finalStates, head, state, transitionFunction, tape) {
        this.states = states
        this.finalStates = finalStates
        this.head = head
        this.state = state
        this.transitionFunction = transitionFunction
        this.tape = tape
        this.running = STATE_RUNNING
        this.apply = this.apply.bind(this)
    }

    apply(machineStep) {
        this.tape[this.head] = machineStep.rewrite
        let oldHead = this.head
        this.head += (machineStep.direction === DIR_LEFT) ? -1 : +1;
        this.state = machineStep.nextState
        return new ViewState(machineStep.direction, oldHead, this.tape, this.state)
    }

}
