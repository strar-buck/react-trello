import { CONSTANTS } from "../actions";

let listId = 3

const initialState = [
    {
        id : 0,
        title : "Machine Learning - week: 1",
        cards : [
            {
                id : 0,
                text : "Probability courses"
            },
            {
                id : 1,
                text : "Discrete maths"
            },
            {
                id : 2,
                text : "Basic of machine learning"
            }
        ]
    },
    {
        id : 1,
        title : "Machine Learning - week: 2",
        cards : [
            {
                id : 0,
                text : "Data Preprocessing and Cleaning"
            },
            {
                id : 1,
                text : "Model Training "
            },
            {
                id : 2,
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
                id : listId,
                cards : []
            }
            console.log("New List",newList)
            listId += 1

            return [...state , newList]
        
            case CONSTANTS.ADD_CARD:
                const newCard = {
                    
                }
        default:
            return state
    }
}

export default listReducer
