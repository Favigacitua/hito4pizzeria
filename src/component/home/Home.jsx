import React, { useEffect, useState } from 'react'
import { Header } from "../header/Header";
import CardPizza from '../cardpizza/CardPizza';

export const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [error, setError] = useState(null)

  useEffect(()=>{
      
      fetch('http://localhost:5000/api/pizzas')
      .then(response=> {
          if(!response.ok){
             throw new Error('No se puede cargar correctamente') 
          }
          return response.json()
      })
      .then(data=> setPizzas(data))
      .catch(error =>{
          console.error('Error al cargar las pizzas',error )
          setError('Hubo un problema para cargar la información')

      })


  }, [])




  return (
    <>
      <div style={{ height: '100%' }}>
        <Header />
        {error ? (
          <h3 style={{ color: 'red' }}>{error}</h3>
        ) : (
          <div className='card.container'>
            <CardPizza 
              pizzas={pizzas} 
              // onAddToCart={handleAddToCart} 
            />
          </div>
        )}
      </div>
    </>

)
}

export default Home