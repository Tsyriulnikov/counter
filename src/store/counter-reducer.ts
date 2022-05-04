export type CounterType = {
    count: number
}

const initState = {
    count: 0
}


export const counterReducer = (state: CounterType = initState, action: CounterActionType): CounterType => {
    switch (action.type) {
        case 'SET_COUNT': {
            return {...state,count:action.payload.count}
        }
        default:
            return {...state}
    }
}


// Action creators

type CounterActionType = SetCountActionType


type SetCountActionType = ReturnType<typeof setCount>
export const setCount = (count: number) => {
    return {
        type:"SET_COUNT",
        payload:{
            count,
        },
    }as const
}