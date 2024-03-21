import "./Products.css"
// import itel from "../assets/itel.jpg"

const Product =(props)=> {

  const { productName, productImage,productPrice }= props

  return (
    <>

     <div className="product-wrap">
      <p>Make up kits</p>
        <img src={productImage} alt="Product image" />
        <p>{productName}</p>
        <h6>#{productPrice}</h6>
     </div>

    
   
    </>

  )
}
export default Product







 {/* <div className="product-wrap">
        <img src={productImage} alt="Product image" />
        <p>{productName}</p>
        <h6>#{productPrice}</h6>
     </div> */}
//  ContentData.map(
//     (Element, index)=>{

//     return (
//     <p key={index}>{Element}</p>
//   )
//     }
//     )

  