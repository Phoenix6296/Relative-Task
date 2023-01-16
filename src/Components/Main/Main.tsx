import Card from "../Card/Card";
import "./Main.css";
const data = [
  {
    title: "Bitcoin(BTC)",
    titleLogo: require("../../Assets/bitcoinLogo.webp"),
    price: "$31,820.80",
    tvl: "$60,000",
    image1: require("../../Assets/bitcoinLogo.webp"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/solidityLogo.webp"),
    net: "$120",
    className: "success",
  },
  {
    title: "Bitcoin(BTC)",
    titleLogo: require("../../Assets/ethereumLogo.webp"),
    price: "$31,820.80",
    tvl: "$60,000",
    image1: require("../../Assets/bitcoinLogo.webp"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/solidityLogo.webp"),
    net: "$120",
    className: "loss",
  },
  {
    title: "Bitcoin(BTC)",
    titleLogo: require("../../Assets/solidityLogo.webp"),
    price: "$31,820.80",
    tvl: "$60,000",
    image1: require("../../Assets/bitcoinLogo.webp"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/solidityLogo.webp"),
    net: "$120",
    className: "success",
  },
  {
    title: "Bitcoin(BTC)",
    titleLogo: require("../../Assets/bitcoinLogo.webp"),
    price: "$31,820.80",
    tvl: "$60,000",
    image1: require("../../Assets/bitcoinLogo.webp"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/solidityLogo.webp"),
    net: "$120",
    className: "success",
  },
  {
    title: "Bitcoin(BTC)",
    titleLogo: require("../../Assets/bitcoinLogo.webp"),
    price: "$31,820.80",
    tvl: "$60,000",
    image1: require("../../Assets/bitcoinLogo.webp"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/solidityLogo.webp"),
    net: "$120",
    className: "success",
  },
  {
    title: "Bitcoin(BTC)",
    titleLogo: require("../../Assets/bitcoinLogo.webp"),
    price: "$31,820.80",
    tvl: "$60,000",
    image1: require("../../Assets/bitcoinLogo.webp"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/solidityLogo.webp"),
    net: "$120",
    className: "success",
  },
  {
    title: "Bitcoin(BTC)",
    titleLogo: require("../../Assets/bitcoinLogo.webp"),
    price: "$31,820.80",
    tvl: "$60,000",
    image1: require("../../Assets/bitcoinLogo.webp"),
    image2: require("../../Assets/ethereumLogo.webp"),
    image3: require("../../Assets/solidityLogo.webp"),
    net: "$120",
    className: "success",
  },
];
const Main = () => {
  return (
    <div className="main">
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
  );
};

export default Main;
