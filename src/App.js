import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.scss";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
    setApiData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <div className="cards">
        {apiData.map((item, index) =>
          <Card data={item} key={index} />
        )}
      </div>
    </div>
  );
}

export default App;
