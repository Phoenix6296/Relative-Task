import "./Circle.css";
const Circle = (props: { titleLogo: string }) => {
  return (
    <div className="card__circle center">
      <div className="card__outer-circle center">
        <div className="card__inner-circle center">
          <img src={props.titleLogo} alt="" id="circle-logo" />
        </div>
      </div>
    </div>
  );
};

export default Circle;
