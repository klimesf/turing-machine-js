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
        let added = false
        if (this.head == -1) {
            this.tape.unshift(machineStep.rewrite)
            this.head = 0
            added = true
        } else if (this.head >= this.tape.length) {
            this.tape.push(machineStep.rewrite)
            added = true
        } else {
            this.tape[this.head] = machineStep.rewrite
        }
        let oldHead = this.head
        this.head += (machineStep.direction === DIR_LEFT) ? -1 : +1;
        this.state = machineStep.nextState
        return new ViewState(machineStep.direction, oldHead, this.tape, this.state, added)
    }

}
