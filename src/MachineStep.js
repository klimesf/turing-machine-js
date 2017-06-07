/**
 * Represents a single machine step.
 */
export default class MachineStep {

    constructor(nextState, rewrite, direction) {
        this.nextState = nextState
        this.rewrite = rewrite
        this.direction = direction
    }

}
