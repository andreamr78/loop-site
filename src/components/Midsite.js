import React, {useEffect} from 'react'
import '../sass/MidsiteStyles.scss';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import desktopImage from '../images/desktop/image-interactive.jpg';
import mobileImage from '../images/mobile/image-interactive.jpg';

//desktop images 
import deepEarth from '../images/desktop/image-deep-earth.jpg'
import nightArc from '../images/desktop/image-night-arcade.jpg'
import soccTeam from '../images/desktop/image-soccer-team.jpg'
import theGrid from '../images/desktop/image-grid.jpg'
import fromUp from '../images/desktop/image-from-above.jpg'
import pocketB from '../images/desktop/image-pocket-borealis.jpg'
import theCurious from '../images/desktop/image-curiosity.jpg'
import fisheye from '../images/desktop/image-fisheye.jpg'

//mobiles-images

import deepEarthM from '../images/mobile/image-deep-earth.jpg'
import nightArcM from '../images/mobile/image-night-arcade.jpg'
import soccTeamM from '../images/mobile/image-soccer-team.jpg'
import theGridM from '../images/mobile/image-grid.jpg'
import fromUpM from '../images/mobile/image-from-above.jpg'
import pocketBM from '../images/mobile/image-pocket-borealis.jpg'
import theCuriousM from '../images/mobile/image-curiosity.jpg'
import fisheyeM from '../images/mobile/image-fisheye.jpg'
import {useState} from 'react';


function Midsite() {

  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);
  const [isHovering7, setIsHovering7] = useState(false);
  const [isHovering8, setIsHovering8] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 800) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  
  return (
    <Container>
        <div className='midsite-cont'>
            <img src={isMobile? mobileImage:desktopImage} className='img-man' />
            <Card className='card-class'>
                <Card.Title>The leader in interactive VR</Card.Title>
                    <Card.Body><h5>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.</h5></Card.Body>
            </Card>
        </div> 

      <div className='second-mid'>
          <div>
              <a>Our Creations</a>
              <Button className="float-end btn-top" variant="dark" ><div>See All</div></Button>
           </div>

        <Row>
            <Col>
              <div className={isHovering ? 'white-hover' : ''} onMouseOver={() => {setIsHovering(true)}} onMouseOut={() => {setIsHovering(false)}}>
              <a id='img-text'>Deep earth</a>
                <div className='gradient-block' >
                  <img className='img-creations' src={isMobile? deepEarthM: deepEarth} sm/>
                </div>
              </div> 
            </Col>
            <Col>
            <div className={isHovering2 ? 'white-hover' : ''} onMouseOver={() => {setIsHovering2(true)}} onMouseOut={() => {setIsHovering2(false)}}>
            <a id='img-text'>Night arcade</a>
                <div className='gradient-block' >
                <img className='img-creations' src={isMobile? nightArcM: nightArc} sm/>
                </div>
              </div> 
            </Col>
            <Col>
            <div className={isHovering3 ? 'white-hover' : ''} onMouseOver={() => {setIsHovering3(true)}} onMouseOut={() => {setIsHovering3(false)}}>
            <a id='img-text'>Team socer vr</a>
                <div className='gradient-block' >
                <img className='img-creations' src={isMobile? soccTeamM: soccTeam} sm/>
                </div>
              </div> 
            </Col>
            <Col>
            <div className={isHovering4 ? 'white-hover' : ''} onMouseOver={() => {setIsHovering4(true)}} onMouseOut={() => {setIsHovering4(false)}}>
            <a id='img-text'>The grid</a>
                <div className='gradient-block' >
                <img className='img-creations' src={isMobile? theGridM :theGrid} sm/>
                </div>
              </div> 
            </Col>
        </Row>

        <Row>
            <Col>
            <div className={isHovering5 ? 'white-hover' : ''} onMouseOver={() => {setIsHovering5(true)}} onMouseOut={() => {setIsHovering5(false)}}>
            <a id='img-text'>From up above VR</a>
                <div className='gradient-block' >
                <img className='img-creations' src={isMobile? fromUpM: fromUp} sm/>
                </div>
              </div> 
            </Col>
            <Col>
            <div className={isHovering6 ? 'white-hover' : ''} onMouseOver={() => {setIsHovering6(true)}} onMouseOut={() => {setIsHovering6(false)}}>
            <a id='img-text'>Pocket borealis</a>
                <div className='gradient-block' >
                <img className='img-creations' src={isMobile? pocketBM: pocketB} sm/>
                </div>
              </div> 
            </Col>
            <Col>
            <div className={isHovering7 ? 'white-hover' : ''} onMouseOver={() => {setIsHovering7(true)}} onMouseOut={() => {setIsHovering7(false)}}>
            <a id='img-text'>The curiosity</a>
                <div className='gradient-block' >
                <img className='img-creations' src={isMobile? theCuriousM: theCurious} sm/>
                </div>
              </div> 
            </Col>
            <Col>
            <div className={isHovering8 ? 'white-hover' : ''} onMouseOver={() => {setIsHovering8(true)}} onMouseOut={() => {setIsHovering8(false)}}>
            <a id='img-text'>Make it fisheye</a>
                <div className='gradient-block' >
                <img className='img-creations'src={isMobile? fisheyeM: fisheye} sm/>
                </div>
              </div> 
            </Col>
        </Row>
          <div>
          <Button className="btn-down" variant="outline-dark"><div>See All</div></Button>
        </div>
      </div>
    </Container>
  )
}

export default Midsite