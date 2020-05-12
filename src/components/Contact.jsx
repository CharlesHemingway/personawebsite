// import React from "react";

// // reactstrap components


// export default class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.submitForm = this.submitForm.bind(this);
//     this.state = {
//       status: ""
//     };
//   }

//   render() {
//     const { status } = this.state;
//     return 
//       <>             
      
      
//       <CardHeader className="bg-transparent pb-5">
      
//                     <div className="text-muted text-center mt-2 mb-3">
//                       <small>Email Me Directly</small>
//                     </div>
//                     <div className="btn-wrapper text-center">
//                       <Button
//                         className="btn-neutral btn-icon"
//                         color="success"
//                         href="#pablo"
//                         onClick={e => e.preventDefault()}
//                       >
//                         <span className="btn-inner--icon">
//                           <img
//                             alt="..."
//                             src={require("../assets/img/icons/common/google.svg")}
//                           />
//                         </span>
//                         <span className="btn-inner--text">Ossieltr@gmail.com</span>
//                       </Button>
//                     </div>
//                   </CardHeader>
//                   <CardBody className="px-lg-5 py-lg-5">

//                     <div className="text-center text-muted mb-4">
//                       <small>Or sign in with credentials</small>

                      


import React from "react";

import {
Col,
Button,
//   CardHeader,
CardBody,
FormGroup,
Input,
Label,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup
Row
} from "reactstrap";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <CardBody className="px-lg-5 py-lg-5 text-muted">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/myynyjvv"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder=""/>  
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input type="name" name="name" id="name" placeholder=""/>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="service">Choose a service</Label>
            <Input type="select" name="service" id="service" placeholder="I am interested in">
            <option value="" selected disabled></option>
            <option>Web Design</option>
            <option>SEO</option>
            <option>Marketing</option>
            <option>Other</option>
          </Input>  
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label bold for="service">Choose A Plan</Label>
            <Input type="select" name="service" id="service" placeholder="I am interested in">
            <option value="" selected disabled></option>
            <option>Basic</option>
            <option>Premium</option>
            <option>Elite</option> 
            <option>Not Sure</option>
          </Input>  
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea"  name="message" placeholder="" />
      </FormGroup>
      <small>I consent to Ossiel designs collecting my email address so that I can receive a response to my request. More information on where, how, and why data is stored can be found in the Privacy Policy.</small>
      <FormGroup check>
        
        <Label check>
          <Input type="checkbox" />{' '}
          I agree
        </Label>
      </FormGroup>
        <div className="text-center">
        {status === "SUCCESS" ? <p 
        style={{
          color:"#2dce89",
        }}>Thanks, we'll get back to you within 24 hours!</p> : <Button className="my-4" color="success">Submit</Button>}
        {status === "ERROR" && <p 
        style={{
          color:"red",
        }}>Ooops! There was an error.</p>}
        </div>
      </form>
      </CardBody>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}