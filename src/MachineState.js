export default class MachineState {

    constructor(states, finalStates, head, state, transitionFunction, tape) {
        this.states = states
        this.finalStates = finalStates
        this.head = head
        this.state = state
        this.transitionFunction = transitionFunction
        this.tape = tape
    }

}
