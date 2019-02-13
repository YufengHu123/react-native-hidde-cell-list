
import {ADD_LIST_ITEM,DELETE_LIST_ITEM} from './ActionTypes'
let nextIdNum = 0;

/**
 * 新增listItem
 * @param text
 * @returns {{type: string, id: number, text: *}}
 */

export const addListItem=(text)=>({
    type:ADD_LIST_ITEM,
    id:nextIdNum++,
    text:text
})
export const deleteListItem=(id)=>({
    type:DELETE_LIST_ITEM,
    id

})


