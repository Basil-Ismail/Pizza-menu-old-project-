import pizzaData from "../data/data";

function Pizza({ pizza }) {
  return (
    <div className={`pizza  ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={`${pizza.photoName}`} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>ingredients: {pizza.ingredients}</p>
        <span>{pizza.price}$</span>
      </div>
    </div>
  );
}
function Pizzas() {
  return (
    <div className="pizzas">
      {pizzaData.map((item, index) => {
        return <Pizza key={index} pizza={item} />;
      })}
    </div>
  );
}

export default Pizzas;
