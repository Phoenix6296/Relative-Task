import "./App.css";
import Main from "./Components/Main/Main";
const App = () => {
  const headingIcon = require("./Assets/activity.png");
  return (
    <div className="app center">
      <div className="app__title center">
        <img src={headingIcon} alt="" />
        <h3>Trending Assets</h3>
      </div>
      <Main />
    </div>
  );
};

export default App;
