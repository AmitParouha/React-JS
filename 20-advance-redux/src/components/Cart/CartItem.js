import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';
import {useDispatch} from "react-redux"

const CartItem = ({ item }) => {
  const {itemId, title, quantity, price, totalPrice} = item;
  const dispatch = useDispatch();
  
  function handleIncreaseQuantity(){
    dispatch(cartActions.addItemToCart({itemId, title}));
  }

  function handleReduceQuantity(){
    dispatch(cartActions.removeItemToCart(itemId))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleReduceQuantity}>-</button>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
