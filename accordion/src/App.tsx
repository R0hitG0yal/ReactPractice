import "./App.css";
import Explorer from "./components/fileExplorer/Explorer";
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
        <Explorer />
      </div>
    </>
  );
}

export default App;
