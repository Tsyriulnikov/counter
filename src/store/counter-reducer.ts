export type CounterType = {
    count: number
    maxValue: string
    startValue: string
    set: boolean
    error: boolean
    disableButton: boolean
}

const initState = {
    count: 0,
    maxValue: "0",
    startValue: "0",
    set: true,
    error: false,
    disableButton: false
}


export const counterReducer = (state: CounterType = initState, action: CounterActionType): CounterType => {
    switch (action.type) {
        case 'SET_COUNT': {
            return {...state, count: action.payload.count}
        }
        case 'SET_MAX_VALUE': {
            return {...state, maxValue: action.payload.maxValue}
        }
        case 'SET_START_VALUE': {
            return {...state, startValue: action.payload.startValue}
        }
        case 'SET_SET': {
            return {...state, set: action.payload.set}
        }
        case 'SET_ERROR': {
            return {...state, error: action.payload.error}
        }
        case 'SET_DISABLE_BUTTON': {
            return {...state, disableButton: action.payload.disableButton}
        }
        default:
            return {...state}
    }
}


// Action creators

type CounterActionType = SetCountActionType | MaxValueActionType | StartValueActionType |
    SetActionType | ErrorActionType | DisableButtonActionType


type SetCountActionType = ReturnType<typeof setCount>
export const setCount = (count: number) => {
    return {
        type: "SET_COUNT",
        payload: {
            count,
        },
    } as const
}
type MaxValueActionType = ReturnType<typeof setMaxValue>
export const setMaxValue = (maxValue: string) => {
    return {
        type: "SET_MAX_VALUE",
        payload: {
            maxValue,
        },
    } as const
}
type StartValueActionType = ReturnType<typeof setStartValue>
export const setStartValue = (startValue: string) => {
    return {
        type: "SET_START_VALUE",
        payload: {
            startValue,
        },
    } as const
}
type SetActionType = ReturnType<typeof setSet>
export const setSet = (set: boolean) => {
    return {
        type: "SET_SET",
        payload: {
            set,
        },
    } as const
}
type ErrorActionType = ReturnType<typeof setError>
export const setError = (error: boolean) => {
    return {
        type: "SET_ERROR",
        payload: {
            error,
        },
    } as const
}
type DisableButtonActionType = ReturnType<typeof setDisableButtonSet>
export const setDisableButtonSet = (disableButton: boolean) => {
    return {
        type: "SET_DISABLE_BUTTON",
        payload: {
            disableButton,
        },
    } as const
}