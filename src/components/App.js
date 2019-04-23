import React, { Component } from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton';
import styled from 'styled-components'
import DragDropContext from 'react-beautiful-dnd'


const ListContainer = styled.div`
  display : flex;
  flex-direction : row;
  align-items: center;
`

class App extends Component {

  onDragEnd = () => {
    // Todo: reordering logic goes here 
  }
  render() {
    const { lists } = this.props
    return (
      // <DragDropContext onDragEnd={this.onDragEnd} />
		<div className="container App">
			{/* <h2>Trello</h2> */}
      <ListContainer>
        {lists.map(list => 
          <TrelloList 
            key={list.id} 
            listID={list.id} 
            title={list.title} 
            cards={list.cards}
          />
          )
        }
        <TrelloActionButton list />
      </ListContainer>
		</div>
    );
  }
}

const mapStateToProps = state => ({
  lists : state.lists
})



export default connect(mapStateToProps)(App);
