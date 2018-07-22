import React from 'react';
import {Link} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

import './ApiCard.css';

const ApiCard = (props) => {
    console.log(props);
    return (
        <Card className="api-card">
            <CardBody style={{textAlign: 'center'}}>
                <CardTitle style={{fontSize: '20px'}}>{props.api.name}</CardTitle>
                <CardSubtitle>{props.api.host}</CardSubtitle>
            </CardBody>
            <Link to={{
                pathname: '/api',
                paths: props.api.paths
            }}>
            <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt={props.api.name} />
            </Link>
            <CardBody style={{textAlign: 'center'}}>
                <CardText style={{paddingBottom: '10px'}}>{props.api.description}</CardText>
                <CardLink href={props.api.website}>website</CardLink>
            </CardBody>
        </Card>
    )
}

export default ApiCard;