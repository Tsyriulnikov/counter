export type CounterType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}


export const counterReducer = (state: CounterType = initState, action: LoadingActionType): CounterType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state,isLoading:action.payload.isLoading}
        }
        default:
            return {...state}
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type:"LOADING",
        payload:{
            isLoading,
        },
    }as const
}