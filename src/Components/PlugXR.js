import React, { useState } from "react";
import {
  Navbar,
  Container,
  Card,
  Button,
  Col,
  Row,
  Modal,
} from "react-bootstrap";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

function PlugXR() {
  const [state, setState] = useState({ width: "100%", height: "100vh" });
  const [state1, setState1] = useState({ width: "100%", height: "100vh" });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDivVisible, setDivVisible] = useState(false);
  const toggleDiv = () => {
    setDivVisible(true);
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">plugXR</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">plugXR</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card>
        <Card.Body>
          <Button onClick={toggleDiv} style={{ float: "left" }}>
            Save
          </Button>
        </Card.Body>
      </Card>

      <Container>
        <Row style={{width:'100%'}}>
          <Col>
            <Resizable
              style={{
                
                borderRight: "2px solid black",
                
              }}
              size={{ width: state.width, height: state.height }}
              onResizeStop={(e, direction, ref, d) => {
                setState({
                  width: state.width + d.width,
                  height: state.height + d.height,
                });
              }}
            >
            
 


            </Resizable>
          </Col>
          <Col>
            <Draggable>
              <div>
                {isDivVisible && (
                  <div className="box">
                    <Modal.Dialog>
                      <Modal.Header style={{float:"right"}} closeButton onClick={()=>{
                        setDivVisible(false);
                      }}>
                        <Modal.Title className="title">PlugXR</Modal.Title>
                      </Modal.Header>
                      <hr></hr>

                      

                     
                    </Modal.Dialog>
                  </div>
                )}
              </div>
            </Draggable>
          </Col>
          <Col>
            <Resizable
              style={{
                float: "right",
                borderLeft: "2px solid black",
                display: "inline-block",
              }}
              size={{ width: state1.width, height: state1.height }}
              onResizeStop={(e, direction, ref, d) => {
                setState1({
                  width: state1.width + d.width,
                  height: state1.height + d.height,
                });
              }}
            >
               <div class="row">
    <div class="col-sm-4">
      <p className="small-card">Column 1</p>
    </div>
    <div class="col-sm-4">
      <p className="small-card">Column 2</p>   
    </div>
    <div class="col-sm-4">
      <p className="small-card">Column 3</p>        
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <p className="small-card">Column 1</p>
    </div>
    <div class="col-sm-4">
      <p className="small-card">Column 2</p>   
    </div>
    <div class="col-sm-4">
      <p className="small-card">Column 3</p>        
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <p className="small-card">Column 1</p>
    </div>
    <div class="col-sm-4">
      <p className="small-card">Column 2</p>   
    </div>
    <div class="col-sm-4">
      <p className="small-card">Column 3</p>        
    </div>
  </div>
  
            </Resizable>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlugXR;
