import "./App.css";

function App() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/116c99aa-26ac-4fb0-8f1f-257f7b0664fb/W+AIR+FORCE+1+%2707+NEXT+NATURE.png"
          class="card-img-top"
          alt="Nike Air Force 1 '07 Next Nature"
        />
        <div className="card-body">
          <h5 className="card-title">Nike Air Force 1 '07 Next Nature</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">{/*  <Counter /> */}</div>
      </div>
    </div>
  );
}

export default App;
