import {createStore} from 'redux'
import rootReducer from './Reducers'
import {addListItem, deleteListItem} from './Action/index'

const store = createStore(rootReducer)

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addListItem("好好学习"));
store.dispatch(addListItem("好好学习2"))
store.dispatch(deleteListItem(0))


unsubscribe();
