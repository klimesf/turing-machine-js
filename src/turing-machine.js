export default function(state, states, finalStates, tape, head) {
    if (finalStates.indexOf(finalStates) > -1) {
        return "finished"
    }
}
