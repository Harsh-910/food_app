import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food" />
      </div>
    </>
  );
};

export default Header;
