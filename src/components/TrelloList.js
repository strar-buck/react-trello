import React from 'react';
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

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
        <Droppable droppableId={String(listID)}>
            {provided => (
                <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                    <h4>{title}</h4>
                    {
                        cards.map((card,index) => (<TrelloCard index={index} key={card.id} cardID={card.id} text={card.text}/>))
                    }
                    <TrelloActionButton listID={listID}/>
                    {provided.placeholder}
                </ListContainer>
            )}
        </Droppable>
    )
}


export default TrelloList