import { Products } from "../../components/products";
import { useSelector } from "react-redux";

const CartProducts = () => {

  const cartProducts = useSelector(state => state.cartProducts)

  return (
    <main>
      <h1>Cart Products</h1>
      <section>
        <Products products={cartProducts} />  
      </section>
    </main>
  );
};

export { CartProducts };
