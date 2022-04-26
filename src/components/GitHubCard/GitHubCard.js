import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GithubImg from '/home/matthew/Desktop/coding/UNLV/Full_Course/submission_activities/snapshot-tests/src/images/github.png';


export default function GitHubCard() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={GithubImg} style={{width: '200px'}} />
            <Card.Body>
                <br></br>
                <Card.Title style={{fontSize: '20px'}}>Matthew Rhoades</Card.Title>
                <Card.Text>
                Github Profile
                </Card.Text>
                <br></br>
                <Button style={{textDecoration: 'none', backgroundColor: 'black', borderRadius: '30px', padding: '10px', color: 'white'}} href="https://github.com/" variant="primary">Go to github</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
