import "./App.css";
import Cardcomponent from "./components/Cardcomponent";
function App() {
  return (
    <div style={{ backgroundColor: "#fa8c16", height: 600, margin: "20px" }}>
      <p style={{ float: "right" }}>
        <img
          src="https://plugins.miniorange.com/wp-content/uploads/2018/10/amazon-logo.png"
          alt=""
        />
      </p>
      <Cardcomponent />
    </div>
  );
}

export default App;
