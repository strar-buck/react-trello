import React from 'react';
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import styled from 'styled-components'


const ListContainer = styled.div`
    background-color : #ccc;
    border-radius : 2px;
    width : 200px;
    padding : 2px;
    height: 100%;
    margin-right: 8px;


`

const TrelloList = ({title , cards , listID}) => {
    return(
        <ListContainer>
            <h4>{title}</h4>
            {
                cards.map(card => (<TrelloCard key={card.id} text={card.text}/>))
            }
            <TrelloActionButton listID={listID} />
        </ListContainer>
    )
}


export default TrelloList