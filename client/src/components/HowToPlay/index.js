import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

const HowToPlay = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>How to Play:</CardTitle>
          <CardText>
            <p>Read the scenario presented</p>
            <p>After reading the scenario, you will be prompted to select one of two (2) choices</p>
            <p>Each choice will prompt a different scenario and a new set of choices</p>
            <p>Choose wisely, this adventure is in your hands</p>
          </CardText>
          <a href="/game"><Button color="primary" size="lg" block>Click Here to Code Your Own Adventure</Button></a>
          <CardImg src="images/book-compass-flatlay-1432924.jpg" alt="Card image cap" />
        </CardBody>
        
      </Card>
    </div>
  );
};

export default HowToPlay;