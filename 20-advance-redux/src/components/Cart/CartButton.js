import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux"

const CartButton = (props) => {
  const totalItemQuantity = useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch();
  
  function handleToggle(){
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemQuantity}</span>
    </button>
  );
};

export default CartButton;
