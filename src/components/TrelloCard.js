import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import  Icon from '@material-ui/core/Icon';
import styled from 'styled-components'


const CardContainer = styled.div`
    margin-bottom : 2px;
`

const TrelloCard = ({text}) => {

    return(
        <CardContainer>
            <Card>
                <CardContent>
                    <Typography  color="textSecondary">{text}</Typography>
                </CardContent>
            </Card>
        </CardContainer>
    )
}


export default TrelloCard