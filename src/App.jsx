import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar} from './component/navbar/NavBar'
import {Home} from './component/home/Home'
import {Footer} from './component/footer/Footer'
import {LoginComp} from './component/login/LoginComp'
import { RegisterComp } from './component/register/RegisterComp'
import {Cart} from './component/cart/Cart'
import  {Pizza}  from './component/pizza/Pizza'

   

export function App() {

        return (                       
        <div>

          
          <NavBar/>         
          {/* <Home/> */}
          {/* <Cart/> */}
          {/* <LoginComp/>           */}
          {/* <RegisterComp/>  */}
          <Pizza/>

          <Footer/>


        </div>
        );
}

