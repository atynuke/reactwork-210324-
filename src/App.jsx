import { React, useState } from "react";
import Product from "./Components/Products.jsx";
import "./App.css";

function App() {
  const ContentData = [
    {
      productImage: `./src/assets/boxblack.jpg`,
      productName: `boxblack`,
      productPrice: `#30,000`,
    },

    {
      productImage: `./src/assets/brush.jpg`,
      productName: `brush`,
      productPrice: `#10,000`,
    },

    {
      productImage: `./src/assets/poreless.jpg`,
      productName: `poreless`,
      productPrice: `#30,000`,
    },

    {
      productImage: `./src/assets/wallbox.jpg`,
      productName: `wallbox`,
      productPrice: `#20,000`,
    },

    {
      productImage: `./src/assets/lipgloss.jpg`,
      productName: `lipgloss`,
      productPrice: `#15,000`,
    },
  ];

  const [logged, setLog] = useState(false);
  const toggleLog = () => {
    const presentState = logged;
    setLog(!presentState);
  };

  return (
    <>
      <h1>MAKEUP KITS</h1>

      <button onClick={() => toggleLog()}>
        {logged ? "Log Out" : "Log In"}
      </button>

      <div style={{ display: "flex", gap: "20px" }} />

      {logged ? 
      <div className="productDiv">
        {ContentData.map((Element, index) => {
          return (
            <Product
              productImage={Element.productImage}
              productName={Element.productName}
              productPrice={Element.productPrice}
            />
          );
        })}
      </div> 
      : "Please log In" }
    </>
  );

  
}

export default App;






























// const ContentData = {productImage, productName, productPrice}
{
  /* <div style={{display: "flex", gap:"20px"}}>
        
<ContentData productImage="./src/assets/boxblack.jpg" productName="boxblack" productPrice="" />
<ContentData productImage="./src/assets/boxblack.jpg" productName="boxblack" productPrice="" />
<ContentData productImage="./src/assets/lipgloss.jpg" productName="lipgloss" productPrice="899000" />
<ContentData productImage="./src/assets/poreless.jpg" productName="poreless" productPrice="89000" />
<ContentData productImage="./src/assets/wallbox.jpg" productName="wallbox" productPrice="89000" />
</div> */
}

//   // return (
//     <>

// {/*
//       <h1> Product Page </h1>

//       <div style={{display: "flex", gap:"20px"}}>
//         <Product productImage="./src/assets/itel.jpg" productName="it" productPrice="89000" />
//         <Product productImage="./src/assets/itel.jpg" productName="nexus" productPrice="98000" />
//         <Product productImage="./src/assets/itel.jpg" productName="hiker" productPrice="128000" />
//         <Product productImage="./src/assets/itel.jpg" productName="Hiker" productPrice="135000" />
//       </div>  */}

//     {/* </> */}
//   );
// }

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
</>;
