import Card from "../Card/Card";
import "./Main.css";
const data = [
  {
    title: "Bitcoin(BTC)",
    titleLogo: require("../../Assets/bitcoinLogo.webp"),
    price: "$31,812.80",
    tvl: "$60,000",
    image1: require("../../Assets/solanaLogo.png"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/binanceCoin.png"),
    net: "10%",
    className: "success",
  },
  {
    title: "Ethereum(ETH)",
    titleLogo: require("../../Assets/solanaLogo.png"),
    price: "$32.83",
    tvl: "$60,000",
    image1: require("../../Assets/bitcoinLogo.webp"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/binanceCoin.png"),
    net: "12.32%",
    className: "loss",
  },
  {
    title: "Binance USD(BUSD)",
    titleLogo: require("../../Assets/ethereumLogo.webp"),
    price: "$1,466.45.45",
    tvl: "$60,000",
    image1: require("../../Assets/solanaLogo.png"),
    image2: require("../../Assets/bitcoinLogo.webp"),
    image3: require("../../Assets/binanceCoin.png"),
    net: "11.93%",
    className: "loss",
  },
  {
    title: "Shiba Inu(SHIB)",
    titleLogo: require("../../Assets/shibaLogo.png"),
    price: "$0.00000001948",
    tvl: "$60,000",
    image1: require("../../Assets/solanaLogo.png"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/binanceCoin.png"),
    net: "8.1%",
    className: "loss",
  },
];
const Main = () => {
  const headingIcon = require("../../Assets/activity.png");
  return (
    <div>
      <div className="main__title">
        <img src={headingIcon} alt="" />
        <h3>Trending Assets</h3>
      </div>
      <div className="main center">
        {data.map((item) => {
          return (
            <Card
              title={item.title}
              titleLogo={item.titleLogo}
              price={item.price}
              tvl={item.tvl}
              logo1={item.image1}
              logo2={item.image2}
              logo3={item.image3}
              net={item.net}
              className={item.className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
