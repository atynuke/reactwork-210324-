import {React } from "react";
import Product from "./Components/Products.jsx";
import "./App.css";

function App() {


    const ContentData = [
      { productName: `Mikano`, 
        productImage:``,
        productPrice:`#30,000`},

        { productName: `Mikano`, 
        productImage:``,
        productPrice:`#30,000`},

        { productName: `Mikano`, 
        productImage:``,
        productPrice:`#30,000`},

        { productName: `Mikano`, 
        productImage:``,
        productPrice:`#30,000`}
      
     ]

 { 
  ContentData.map(
    (Element, index)=>{
  return(
    <p key={index}>{Element}</p>
  )}
)
}
  return (
    <>
     
{/*      
      <h1> Product Page </h1>

      <div style={{display: "flex", gap:"20px"}}>
        <Product productImage="./src/assets/itel.jpg" productName="it" productPrice="89000" />
        <Product productImage="./src/assets/itel.jpg" productName="nexus" productPrice="98000" />
        <Product productImage="./src/assets/itel.jpg" productName="hiker" productPrice="128000" />
        <Product productImage="./src/assets/itel.jpg" productName="Hiker" productPrice="135000" />
      </div>  */}
    
   
  
    </>
  );
}
export default App;














// const pContents =[]





// const collections = [ "Isreal",  "john",  "kabiru",  " frank",  "precious",  "david",]

  <>
    {/* <h1>React List Rendering </h1>
    <br />
    <h2>List of Debtors</h2>
    {
      //set parameters or variable{item,index}
      collections.map((item, index) => {
      return (
        <li key ={index}>{item} </li>)

      })
    } */}
      {/* <ul>
        <li>Isreal</li>
        <li>john</li>
        <li>kabiru</li>
        <li>frank</li>
        <li>precious</li>
        <li>david</li>
      </ul> */}
  </>

