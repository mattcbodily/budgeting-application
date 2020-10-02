const initialState = {
    budget: {}
};

const GET_BUDGET = 'GET_BUDGET',
      CLEAR_BUDGET = 'CLEAR_BUDGET';

export function getBudget(budgetObj){
    return {
        type: GET_BUDGET,
        payload: budgetObj
    }
}

export function clearBudget(){
    return {
        type: CLEAR_BUDGET,
        payload: {}
    }
}

export default function budgetReducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_BUDGET:
            return {...state, budget: payload};
        case CLEAR_BUDGET:
            return {...state, budget: payload};
        default:
            return state;
    }
}