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
    switch(action.type){
        default:
            return state
    }
}

export default listReducer
