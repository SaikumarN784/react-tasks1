import varable from '../textcolor-styles/css-styles/text.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Imagescomp from '../image-comp/images';
import varable2 from "../textcolor-styles/css-styles/text.module.css"
//form controls
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
///end

//floating


function Headboot() {

  return(
 <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      
        <Imagescomp/>
         
        <Carousel.Caption>
          <h5 className={varable.sai}>First slide label</h5>
          <p  className={varable.sai}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {/* <Imagescomp/> */}
      <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' width={1550} height={500}></img>

        <Carousel.Caption>
          <h5 className={varable2.sai2} >Second slide label</h5>
          <p className={varable2.sai2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {/* <Imagescomp/> */}
      <img src='https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg' width={1550} height={500}></img>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
<br></br><br></br>



    <Form>
   

      {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2"> */}
        
        {/* </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group> */}



<Form.Group as={Row} className="mb-3" controlId="ormPlaintextPassword">
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="5">
          <Form.Control type="Username" placeholder="Username" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="5">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>


    
    </div>

    );
}



// export default BasicExample

export default Headboot