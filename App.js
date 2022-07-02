import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) 
{
  let product = [
    {
      title :'iphone',
      price : 50000
    },
    {
      title :'samsung',
      price :50000
    },
    {
      title :'hawavi',
      price :50000
    },
    {
      title :'oppo',
      price :50000
    },
    {
      title :'vivo',
      price :30000
    },
  ]
  return (

    <div className="Container">
      <div className="row mt-5">
        {
        product.map((products)=>
        {
         return<Card title={products.title} price={products.price}></Card>
       })
      }
);

      </div>
    </div>
  );
}

export default App;
