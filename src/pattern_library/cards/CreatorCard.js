/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CreatorCard.js

    Component for the Wick Creator Highlight Card
*/

import React from 'react';
import Img from 'react-image';

import { Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import '../../scss_styles/CreatorCard.scss';

const CreatorCard = ({username, userImage, projectImage, description}) => (
    <Row className="Wick-row">
        <Col sm="8" md="6">
            <Card className="CreatorCard-container">
                <Img className="CreatorCard-projectImage" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />
                <CardBody className="CreatorCard-content">
                    <Img className="CreatorCard-creatorImage" src={userImage} />
                    <CardTitle className="CreatorCard-username">{username}</CardTitle>
                    <CardText className="CreatorCard-text">{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

export default CreatorCard;