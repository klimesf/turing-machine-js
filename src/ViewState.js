/**
 * Represents current state of the Turing Machine Simulator view, i.e., the
 * tape and the TM state description.
 */
export default class ViewState {

    constructor(direction, highlight, tape, newState, added = false) {
        this.direction = direction
        this.highlight = highlight
        this.tape = tape
        this.newState = newState
        this.added = added
    }

}
