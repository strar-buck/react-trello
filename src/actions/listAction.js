import { CONSTANTS } from '../actions'

export const addList = (title) => {
    console.log("Title is",title)
    return{
        type : CONSTANTS.ADD_LIST,
        payload : title
    }
}
