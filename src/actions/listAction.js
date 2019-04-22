import { CONSTANTS } from '../actions'

export const addList = (title) => {
    console.log("Title is",title)
    return{
        type : CONSTANTS.ADD_LIST,
        payload : title
    }
}

export const addCard = (text, listID) => {
    console.log("adding card")
    return{
        type : CONSTANTS.ADD_CARD,
        payload : {text: text, listId : listID}
    }
}