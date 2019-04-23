import { CONSTANTS } from "../actions";

let listId = 3
let cardId = 6

const initialState = [
    {
        id : `listID-${0}`,
        title : "Machine Learning - week: 1",
        cards : [
            {
                id : `cardID-${0}`,
                text : "Probability courses"
            },
            {
                id : `cardID-${1}`,
                text : "Discrete maths"
            },
            {
                id : `cardID-${2}`, 
                text : "Basic of machine learning"
            }
        ]
    },
    {
        id : `listID-${1}`,
        title : "Machine Learning - week: 2",
        cards : [
            {
                id : `cardID-${3}`,
                text : "Data Preprocessing and Cleaning"
            },
            {
                id : `cardID-${4}`,
                text : "Model Training "
            },
            {
                id : `cardID-${5}`,
                text : "Hyperparameter tuning"
            }
        ]
    }
]

const listReducer = (state=initialState , action) => {
    console.log("Actions is",action)
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title : action.payload,
                id : `listID-${listId}`,
                cards : []
            }
            console.log("New List",newList)
            listId += 1

            return [...state , newList]
        
            case CONSTANTS.ADD_CARD:
                const newCard = {
                    text : action.payload.text,
                    id : `cardID-${cardId}`
                }
                cardId += 1
                const newState = state.map(listInstance => {
                    if(listInstance.id === action.payload.listID){
                        return {
                            ...listInstance,
                            cards : [...listInstance.cards,newCard]
                        }
                    }else{
                        return listInstance
                    }
                })
                
                return newState
        default:
            return state
    }
}

export default listReducer
