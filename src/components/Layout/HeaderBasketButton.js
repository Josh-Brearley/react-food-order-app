import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderBasketButton.module.css";

const HeaderBasketButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Basket</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderBasketButton;
