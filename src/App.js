import axios from "axios";
import "./App.css";
import { useState } from "react";
import { TbReload } from "react-icons/tb";
function App() {
  const [data, setData] = useState({});
  console.log(data);

  const loadData = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="App">
      <p>Fact: {data.fact}</p>
      <p>Length: {data.length}</p>
      <TbReload className="reload" onClick={loadData}></TbReload>
    </div>
  );
}

export default App;
