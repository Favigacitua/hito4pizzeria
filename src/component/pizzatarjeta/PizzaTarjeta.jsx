import React from 'react';
import '../pizzatarjeta/pizzaTarjeta.css'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const PizzaTarjeta = ({ pizza, increment, decrement }) => {
  return (    
    <div className='tarjCart'>
      <div className='tarjContenido'>
       <Card className='tarjetacard'> 
        <h4 style={{fontWeight:'bold', padding:'4px', height:'60px'}}>{pizza.name}</h4>
        <img src={pizza.img} alt="" style={{ width: '140px' }} />
        <p style={{fontWeight:'bold'}}>${pizza.price}</p>
        <Card.Body className='bodycard'>
        <Button  variant="dark" style={{ width: '2rem' }} onClick={() => decrement(pizza.id)}>-</Button>
        <p style={{ color: 'black' }}>{pizza.count}</p>
        <Button  variant="dark" style={{ width: '2rem' }} onClick={() => increment(pizza.id)}>+</Button>
        </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PizzaTarjeta;