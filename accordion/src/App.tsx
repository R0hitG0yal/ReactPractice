// import "./App.css";
// import ChangeTheme from "./components/changeTheme/changeTheme";
// import Scroll from "./components/customScroll/scroll";
// import explorer from "./components/fileExplorer/data";

import Game from "./components/tic-tac-toe/game";

// import Tabs from "./components/tabs/tabs";

// import Explorer from "./components/fileExplorer/Explorer";
// import ImageSlider from "./components/imageSlider/slider";
// import TimeSlotPicker from "./components/timeSlot/timeSlotPicker";
// import Accordian from "./components/accordian/accordion";
// import RandomColor from "./components/randomBackground/randomColor";
// import Stars from "./components/starRating/stars";

function App() {
  return (
    <>
      <div>
        {/* <LoadMore url={"https://dummyjson.com/products"} limit={20} /> */}
        {/* <Explorer data={explorer} /> */}
        {/* <ChangeTheme /> */}
        {/* <Scroll></Scroll> */}
        {/* <Tabs /> */}
        <Game />
      </div>
    </>
  );
}

export default App;
