import {ADD_LIST_ITEM, DELETE_LIST_ITEM} from '../Action/ActionTypes'
import addItem from './addItem'
import {combineReducers} from 'redux'

const initState={
    title:'hiddle_cell_demo',
    listData:[]
}
const todoAppReducer = (state=initState, action) => {
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
        case DELETE_LIST_ITEM:
            return {
                ...state,
                listData: state.listData.filter((item) => item.id !== action.id)
            }
        default:
            return state;
    }
}
// export default combineReducers({
//     addItem,
//     todoAppReducer,
// });
export default todoAppReducer
