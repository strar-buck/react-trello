import React from 'react';
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'


const TrelloList = ({title , cards}) => {
    return(
        <div style={styles.container}>
            <h2>{title}</h2>
            { cards.map(card => <TrelloCard key={card.id} text={card.text} />) }
            <TrelloActionButton/>
        </div>
    )
}


const styles = {
    container : {
        backgroundColor : '#ccc',
        borderRadius : 2,
        width : 200,
        padding : 2,
        height: "100%",
        marginRight: 10

    }
}

export default TrelloList