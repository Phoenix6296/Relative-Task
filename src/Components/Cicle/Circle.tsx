import './Circle.css';
const Circle = () => {
  const BitcoinLogo = require("../../Assets/bitcoinLogo.webp");
  return (
    <div className="card__circle center">
      <div className="card__outer-circle center">
        <div className="card__inner-circle center">
          <img src={BitcoinLogo} alt="" id="circle-logo"/>
        </div>
      </div>
    </div>
  );
};

export default Circle;
