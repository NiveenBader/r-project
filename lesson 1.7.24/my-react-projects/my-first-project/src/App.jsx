
import './App.css'

//function User(props) {
// console.log(props)
// return (
// <ul>
//  <li><span style={{ fontWeight: "bold" }}>Name</span> <>{props.name}<///span></li>
//   </ul>);
//}


//function App() {
//// const name = "daniel"
//// return <div>
//  //<h1>Hello From my APP </h1>
////<h2>this the result of 1+1 = {1 + 1} </h2>
//// <User name="daniel" />
//// <User name="Neveen" />
//// <User name="TAL" />
//// <User name={name} />
//// <User name={name} />
// //</div>
//}


function Product({ title, discreption, image, price }) {
  return (
    <div>
      <h1 style={{ color: "green" }}>{title}</h1>
      <p>{discreption}</p>
      < img style={{ width: 200 }} src={image} alt={title} />
      <p>{price}$</p>
    </div>

  )
}

function App() {
  return (<div>
    <Product
      title="Shampoo"
      discreption="the best shampoo ever"
      image="https://static.beautytocare.com/cdn-cgi/image/width=1440,height=1200,f=auto/media/catalog/product//g/a/garnier-ultimate-blends-avocado-oil-shea-butter-shampoo-250ml.jpg"
      price={55}
    />

    <Product
      title="ipone"
      discreption="the best iphone ever"
      image="https://img.ksp.co.il/item/277805/b_1.jpg?v=1695018832"
      price={6668}
    />
  </div>
  )
}

export default App
