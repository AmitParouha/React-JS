import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";
 
export default function App() {
  return (
    <CartContextProvider>
      {/*For Header component we are using Context API approch */}
      <Header />
 
      {/* For Shop component we are using Component Composition approch */}
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}