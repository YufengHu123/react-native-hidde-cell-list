import {ADD_LIST_ITEM} from '../Action/ActionTypes'

const initState={
    title:'hiddle_cell_demo',
    listData:[]
}
const addItemReducer = (state=initState, action) => {
    switch (action.type) {
        case ADD_LIST_ITEM:
            return {
                ...state,
                listData: [
                    ...state.listData,
                    {
                        text: action.text,
                        id: action.id
                    }
                ]
            }
        default:
            return state;
    }
}

export default addItemReducer;
