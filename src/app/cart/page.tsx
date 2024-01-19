import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";

export const metadata = {
  title: "Your cart - alimazon",
};

const CartPage = async () => {
  const cart = await getCart();
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          key={cartItem.id}
          cartItem={cartItem}
          setProductQuantity={setProductQuantity}
        />
      ))}
    </div>
  );
};

export default CartPage;
