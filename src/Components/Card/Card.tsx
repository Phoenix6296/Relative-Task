import Circle from "../Cicle/Circle";
import "./Card.css";
const Card = (props: {
  title: string;
  titleLogo: string;
  price: string;
  tvl: string;
  logo1: string;
  logo2: string;
  logo3: string;
  net: string;
  className: string;
}) => {
  const classNameOfSpan = props.className;
  return (
    <div className="card__wrapper center">
      <Circle titleLogo={props.titleLogo} />
      <div className="card center">
        <p className="card__title">{props.title}</p>
        <div className="card__inside-div center">
          {props.price}
          <span
            style={{ color: classNameOfSpan === "success" ? "green" : "red" }}
          >
            {classNameOfSpan === "success" ? "+" + props.net : "-" + props.net}
          </span>
        </div>
        <p>Price</p>
        <div className="card__inside-div center">{props.tvl}</div>
        <p>TVL</p>
        <div className="card__inside-div center card__icons">
          <img src={props.logo1} alt="Bitcoin Logo" id="bitcoin-logo" />
          <img src={props.logo2} alt="Ethereum Logo" />
          <img src={props.logo3} alt="Solidity Logo" />
        </div>
        <p>Popular Plans</p>
      </div>
    </div>
  );
};

export default Card;
