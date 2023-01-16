import Circle from "../Cicle/Circle";
import "./Card.css";
const Card = () => {
  const BitcoinLogo = require("../../Assets/bitcoinLogo.webp");
  const EthereumLogo = require("../../Assets/ethereumLogo.webp");
  const SolidityLogo = require("../../Assets/solidityLogo.webp");
  return (
    <div className="card__wrapper center">
      <Circle />
      <div className="card center">
        <p className="card__title">Bitcoin(BTC)</p>
        <div className="card__inside-div">$31,820.80</div>
        <p>Price</p>
        <div className="card__inside-div">$60,000</div>
        <p>TVL</p>
        <div className="card__inside-div center card__icons">
          <img src={BitcoinLogo} alt="Bitcoin Logo" id="bitcoin-logo" />
          <img src={EthereumLogo} alt="Ethereum Logo" />
          <img src={SolidityLogo} alt="Solidity Logo" />
        </div>
        <p>Popular Plans</p>
      </div>
    </div>
  );
};

export default Card;
