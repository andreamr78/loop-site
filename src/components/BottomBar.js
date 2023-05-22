import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import FbIcon from './icons/FbIcon';
import TwtIcon from './icons/TwtIcon';
import PinIcon from './icons/PinIcon';
import InstaIcon from './icons/InstaIcon';
import '../sass/footerStyles.scss'

function BottomBar() {
  return (
  <Card className='footer-card'>
    <Card.Body>
      <Row>
        <div className='col-1'>
        <Card.Title className='brand-logo'>loopstudios</Card.Title>
        </div>
    
        <div className='col-2' id='socials-1'>
          <div className='nav-link-footer'>
            <FbIcon id='icon'/>
          </div>
          <div className='nav-link-footer'>
              <TwtIcon id='icon'/>
          </div>
          <div className='nav-link-footer'>
            <PinIcon id='icon'/>
          </div>
          <div className='nav-link-footer'>
            <InstaIcon id='icon'/>
          </div>
        </div>

      </Row>
      <Row id='bottom-row'>
      <div className='col-1' id='bottom-row-col'>
        <Card.Link href="#" className='nav-link-footer'>About</Card.Link>
        <Card.Link href="#" className='nav-link-footer'>Carrers</Card.Link>
        <Card.Link href="#" className='nav-link-footer'>Events</Card.Link>
        <Card.Link href="#" className='nav-link-footer'>Products</Card.Link>
        <Card.Link href="#" className='nav-link-footer'>Support</Card.Link>
        </div>
          
        <div className='col-2' id='socials-2'>
          <div className='nav-link-footer'>
            <FbIcon id='icon'/>
          </div>
          <div className='nav-link-footer'>
              <TwtIcon id='icon'/>
          </div>
          <div className='nav-link-footer'>
            <PinIcon id='icon'/>
          </div>
          <div className='nav-link-footer'>
            <InstaIcon id='icon'/>
          </div>
        </div>

          <div className='col-2'>
            <a id='bottom-text'>© 2021 Loopstudios. All rights reserved.</a>
          </div>
          
      </Row>
    </Card.Body>
  </Card>
  )
}

export default BottomBar