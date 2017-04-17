export default class ViewState {

    constructor(direction, highlight, tape, newState, added = false) {
        this.direction = direction
        this.highlight = highlight
        this.tape = tape
        this.newState = newState
        this.added = added
    }

}
