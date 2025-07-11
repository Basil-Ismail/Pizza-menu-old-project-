import Pizzas from "./Pizza";
import "../index.css";

function App() {
  return (
    <div className="container">
      <div className="  header">
        <h1> Fast Pizza Store </h1>
      </div>
      <div className="menu">
        <h2> Our Menu</h2>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <div className="container">
          <Pizzas />
        </div>

        <button className="btn"> Order NOW!</button>
      </div>
    </div>
  );
}

export default App;
