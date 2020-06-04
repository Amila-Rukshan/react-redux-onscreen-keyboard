
export const inputFocused = (inputID) => {
    return {
        type: 'INPUT_FOCUSED',
        payload: { input : inputID }
    }
}

export const pressKey = (key) => {
    return {
        type: 'KEY_PRESS',
        payload: { key : key }
    }
}

export const toggleCapslock = () => {
    return {
        type: 'CAPS_PRESS'
    }
}