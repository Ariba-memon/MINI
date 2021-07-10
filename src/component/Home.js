
import React from "react";
import {Card,Button} from "react-bootstrap";
import {CardGroup} from "react-bootstrap";
import {Container,Col,Image,Row} from "react-bootstrap";
import{InputGroup,FormControl,Form} from"react-bootstrap";
import{Carousel} from"react-bootstrap";



function Home() {
   return(
       
    <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="https://5.imimg.com/data5/FY/UK/GLADMIN-67678531/hotel-management-system-500x500.png" width="80" height="80"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="Home.js">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Price.js">HOTEL MANAGEMENT APP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#"></a>
        </li>
      </ul>
      
    
  </div>
  </nav>
  
  
 <div>
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cf.bstatic.com/xdata/images/hotel/270x200/213406070.jpg?k=d48c7d381d1d769a94ad82f98510377ecdf5bd83e752f53ce287d06b5f1a03f2&o="
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>MEHRAN HOTEL</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.trvl-media.com/hotels/1000000/530000/522900/522878/551d85d2_z.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>AVARI TOWER</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cache.marriott.com/marriottassets/marriott/KHIPK/khipk-twin-7888-hor-feat.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>MARRIOTT HOTEL</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 </div>
 <div>
 <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://cf.bstatic.com/xdata/images/hotel/square200/213406070.webp?k=d48c7d381d1d769a94ad82f98510377ecdf5bd83e752f53ce287d06b5f1a03f2&o=" width="200" height="200" />
    <Card.Body>
      <Card.Title>Mehran Hotel</Card.Title>
      <Card.Text>
      Hotel Mehran is set in Karachi, in the Shahrah-e-Faisal district. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. The hotel offers a fitness centre and an ATM.

Continental and à la carte breakfast options are available every morning at the hotel.
      </Card.Text>
     
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Lunch</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cf.bstatic.com/xdata/images/hotel/square200/44615615.webp?k=907056089cc7e8f5c84b62d920bc28d8a727937215da85d1a08a96d4d59696ec&o=" width="200" height="200" />
    <Card.Body>
      <Card.Title> Avari Hotel</Card.Title>
      <Card.Text>
      Avari Tower features an outdoor pool, spa and fitness centre. Offering modern air conditioned rooms, the property provides free WiFi in all areas. It is 15 km from Jinnah Airport.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Breakfast</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cf.bstatic.com/xdata/images/hotel/square200/280190481.webp?k=529dde62a53c05fec27ea7fe617096569b1bba71d13c2585bb62ffce7ebb31bc&o=" width="200" height="200" />
    <Card.Body>
      <Card.Title>Pearl Continental Hotel</Card.Title>
      <Card.Text>
      Avari Tower features an outdoor pool, spa and fitness centre. Offering modern air conditioned rooms, the property provides free WiFi in all areas. It is 15 km from Jinnah Airport. Faisal and his satff always go an extra mile to give you the same comfort as home. Fantastic.



      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Dinner</small>
    </Card.Footer>
  </Card>
</CardGroup>
<div>

<div>
<div>
<Card>
    <Card.Img variant="top" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/high-protein-dinners-slow-cooker-meatballs-image-5a04d02.jpg?quality=90&resize=768,574" width="500" height="500" />
    <Card.Body>
      <Card.Title>KARACHI BEST HOTELS</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
</div>
  

</div>
</div>
 </div>

  </div>
  
     
     
    
   )}
  
    

export default Home;
