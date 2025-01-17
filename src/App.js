import "./styles.css";

export default function App() {
  const isGoingOut = true;

  return (
    <div className="App">
      <h1>Do I feel like going out tonight?</h1>
      <button>{isGoingOut ? "Yes" : "No"}</button>
    </div>
  );
}
