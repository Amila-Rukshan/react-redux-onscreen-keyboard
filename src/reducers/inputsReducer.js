const initState = {
    currentInput: '',
    key: '',
    isCapsOn: false,
    name: '',
    address: '',
}

const inputsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INPUT_FOCUSED':
            return {
                ...state, 
                currentInput: action.payload.input
            }
        case 'KEY_PRESS':
            switch (action.payload.key) {
                case "BCKSPCE":
                    return {
                        ...state, 
                        [state.currentInput]: state[state.currentInput].substring(0, state[state.currentInput].length - 1)
                    }
                case "SPACE":
                    return {
                        ...state, 
                        [state.currentInput]: state[state.currentInput] + " "
                    }
                default:
                    return {
                        ...state, 
                        [state.currentInput]: state[state.currentInput] + action.payload.key
                    }
            }
        case 'CAPS_PRESS':
            return {
                ...state, 
                isCapsOn: !state.isCapsOn
            }
        default:
            return state
    }
}

export default inputsReducer