import React from 'react'
import "../sass/TopsiteStyles.scss"
import Topbar from './Topbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function Topsite() {
  return (
    <Container className='container-topsite' fluid>
    <Topbar/>
        <div className='mobile-top'>
            <Card className='text-block' bg='transparent'>
                <Card.Body><h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1></Card.Body>
            </Card>
        </div> 
    </Container>
  )
}

export default Topsite