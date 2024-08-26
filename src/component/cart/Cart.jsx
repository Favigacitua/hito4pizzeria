

  import { useEffect, useState } from 'react';
  import React from 'react';
  import { PizzaTarjeta } from '../pizzatarjeta/PizzaTarjeta';
  import {CardPizza} from '../cardpizza/CardPizza';
  import { pizzaData } from '../../assets/pizzas'; 

  
  export const Cart = () => {
    const [lista, setLista] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
    valorTotal();

    }, [lista]);
    const valorTotal = () => {
      let totalPizzas = 0;
      lista.forEach((pizza) => {
        const price = pizza.price || 0;
        const count = pizza.count || 0;
        totalPizzas += price * count;
      });
      setTotal(totalPizzas);
    };
    const eliminarPizza = (id) => {
      const newList = lista.filter((pizza) => pizza.id !== id);
      setLista(newList);
    };
    const handleIncrement = (id) => {
      const newList = lista.map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count + 1 };
        }
        return pizza;
      });
      setLista(newList);
    };
    const handleDecrement = (id) => {
      const newList = lista.map((pizza) => {
        if (pizza.id === id) {
          if (pizza.count === 1) {
            return null; 
          }
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      }).filter(pizza => pizza !== null); 
      setLista(newList);
    };
    const handlerAddToCart = (id) => {
      const pizzaInCart = lista.find((pizza) => pizza.id === id);
      if (pizzaInCart) {
        handleIncrement(id);
      } else {
        const newPizza = pizzaData.find((pizza) => pizza.id === id);
        if (newPizza) {
          setLista([...lista, { ...newPizza, count: 1 }]);
        }
      }
    };
    return (
      <div>
        <CardPizza onAddToCart={handlerAddToCart} />
        <div style={{display:'flex'}}>
          {lista.map((pizza) => (
            <PizzaTarjeta
              key={pizza.id}
              pizza={pizza} 
              increment={handleIncrement}
              decrement={handleDecrement}
            />
          ))}
        </div>
        <h4>Total: ${total}</h4>
      </div>
    );
  };
  export default Cart