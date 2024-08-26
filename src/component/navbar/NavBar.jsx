import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";




let token=false;

export function NavBar() { 

    


  return (
    <Navbar className="bg-dark text-white" >
      <Container fluid style={{paddingLeft:'0px', marginLeft:'2rem', paddingRight:'0px', marginRight:'2rem', width:'100vw'}}>
        <Navbar.Brand href="#home" className="text-white">
         
          Pizzeria Mamma Mia!
          
        </Navbar.Brand>
        <Navbar.Toggle />
  
        <Navbar.Collapse className="">         
            <Button variant="outline-light" onClick={() => {/* ir al home */}}>
              &#x1F355;Home
            </Button>{/* Se puede agregar un onClick para volverlo funcional}*/}
            
        {!token ? (
          <>            
              <Button variant="outline-light" className="m-2" onClick={() => {/* login */}}>&#x1F510;Login</Button>{" "}
              <Button variant="outline-light" onClick={() => {/* registrarse*/}}>&#x1F510;Register</Button>{" "}            
          </>
        ) : (
          <>           
              <Button variant="outline-light" className="m-2" onClick={() => {/* perfil */}}>&#x1F513;Profile</Button>{" "}
              <Button variant="outline-light" onClick={() => {/* logout */}}>&#x1F512;Logout</Button>{" "}
          </> 
          
        )}

</Navbar.Collapse> 
       
        <Navbar.Collapse className="justify-content-end" style={{  margin:'0px', padding:'none'}}>
          <Button variant="outline-info">&#x1F6D2;Total: $23.000 </Button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar