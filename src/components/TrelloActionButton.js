import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon'
import { Button } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card'

class TrelloActionButton extends Component {
    state = {
        formOpen : false,
        text : ''
    }

    handleChange = (e) => {
        this.setState({
            text : e.target.value
        })
    }

    closeForm = () => {
        this.setState({
            formOpen : false
        })
    }
    openForm = () => {
        this.setState({
            formOpen : true
        })
    }

    renderForm = () => {
        const { list } = this.props
        const placeholder = list ? 'Enter list title...' : 'Enter title for this card ...'
        const buttonText = list ? "Add List" : "Add Card"

        return(
            <div>
                <Card>
                    <Textarea
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </Card>
                <Button variant="contained" style={{color: "white", backgroundColor:"green"}}>{buttonText}</Button> 
                <Icon style={{marginLeft: 10, cursor: "pointer"}} onClick={this.closeForm}>close</Icon>  
            </div>
            
        )
    }

    renderAddButton = () => {
        const { list } = this.props
        const buttonText = list ? 'Add another List' : 'Add another card'
        const buttonTextOpacity = list ? 1 : 0.5
        const buttonTextColor = list ? "white" : "inherit"
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"

        return(
            <div onClick={this.openForm} style={{
                ...styles.openForButtonGroup,
                opacity: buttonTextOpacity , 
                color: buttonTextColor , 
                backgroundColor: buttonTextBackground
            }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton()
    }
}

const styles = {
    openForButtonGroup : {
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
        borderRadius: 3,
        cursor: "pointer"

    }
}

export default TrelloActionButton;