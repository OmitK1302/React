import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return(
      <div className='container'>
        <Header />
        {/* <Pizza /> */}
        {/* Here in the above line Pizza component is added to the App Component */}
        <Menu />
        <Footer />
      </div>
    );
}

// React is all about creating components and putting them together as lego pieces
// In React components are created using function. The name of the function mus start with a capital letter and it must return something or even return NULL but it should have a return.

function Pizza({pizzaObj}) {
  // console.log(props);
    // if(pizzaObj.soldOut) return null;

    return (
      <li className= {(pizzaObj.soldOut)? "sold-out pizza" : "pizza"}>
        <img src = {pizzaObj.photoName} alt="pizza spinaci"></img>
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p> {/* Here the pizza price was set according to the data, if it is sold out "SOLD OUT" will be displayed else the actual price will be displayed by the use of props */}
        </div>
      </li>
    );
}

function Header() {
  const styles = {};
    // return <h1 style={{color: "red", fontSize: "50px", textTransform: "uppercase"}}>Fast React Pizza Co.</h1> // This is how we use inline css in react by creating an object, This object can be declared outside also in a variable and can be used here
    return(
      <header className='header' >
        <h1 style={styles}>Fast React Pizza Co.</h1>
      </header>
    );
  }

function Menu() {
  const pizzas = pizzaData;
  const len = pizzas.length;
    return (
      <main className='menu'>
        <h2>Our Menus</h2>

        {len > 0 &&

        // This is fragment which allows to add two element to the component which was not possible before without using a div.
        <> 
          <p>Authentic Italian cuisine. 6 creative dishes to 
          choose from. All from our stone oven, all organic, 
          all delicious.</p>

          <ul className='pizzas'>
            {/* {pizzaData.map(pizza => <Pizza name = {pizza.name} imageName = {pizza.photoName} ingredients = {pizza.ingredients} soldOut = {pizza.soldOut} price = {pizza.price} />)}; We can do the list rendering(rendering the objects from list using props) by this but this is not the preferred way, The preferred way is to pass the list itself and there we will retrieve what data we want */}
            {pizzas.map(pizza => <Pizza pizzaObj = {pizza} key = {pizza.name} />)} {/*Here key should be unique for every object otherwise it will show a warning in the console*/}
          </ul>
        </>
        }
        
        {/* <Pizza 
          name = "Pizza Spinaci"  
          ingredient = "Tomato, mozarella, spinach, and ricotta cheese" 
          price = {12} // To pass anything other than string we will enter javascript mode by writting it in curly brackets. 
          imageName = "pizzas/spinaci.jpg" 
        />  */}

      </main>
    );
}

function Footer() {
    const hours = new Date().getHours(); // To get the current hours
    const openHours = 12;
    const closeHours = 24;
    const isOpen = hours >= openHours && hours <= closeHours;
    // const isOpen = hours >= true;
    
    return (
      <footer className='footer'>
        {
          (isOpen)? 
            <Order closeHours = {closeHours} openHours={openHours} />
          : 
          <div className='order'>
            <p>We are closed now, will open at {openHours}:00</p>
            <button className = "btn closed">Closed</button>
          </div>
        }

        {/* {isOpen &&  // We are using short circuiting here as if the first value is truthy then the second value get executed else it wont be executed.
          <div className='order'>
            <p>
              We are open until {closeHours}:00, you can visit us online for order;
            </p>
            <button className = "btn">Order Now</button>
          </div>  
        } */}
      </footer>
      // <p> {new Date().toLocaleTimeString()}. We are {(isOpen) ? "open" : "closed"} Now.
      
      // </p>
    );
}

function Order({closeHours, openHours}){
  return (
    <div className='order'>
      <p>
        We are open from {openHours}:00 to {closeHours}:00, you can visit us online for order;
      </p>
      <button className = "btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>); // Strict mode is not necessary but its a good practice. It does that during development it will render the component twice in order to find any bugs.
