import { Helmet } from "react-helmet";
import { useState } from "react";
import "./index.css";
import Header from "./Comonents/Header/Header";
import City from "./Comonents/City/City";
import Letterboxd from "./Comonents/Letterboxd/Letterboxd";


function App() {
  const [headerToggle, setHeader] = useState(true);
  const pages = [
    { title: "City", favicon: "./img/austria_icon.svg" },
    { title: "Letterboxd", favicon: "./img/Letterboxd_icon.svg" },
  ];
  let page;
  
    headerToggle ? (page = pages[0]) : (page = pages[1]);
 

  const products = [
    {
      name: "The Pianist",
      img: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      name: "Forrest Gump",
      img: "https://m.media-amazon.com/images/M/MV5BNmZkOWJjNDItYTkxZS00MjJkLTg3MjUtZDY1NzAzMjIzODYyXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"
    },
    {
      name: "The Departed",
      img: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"
    },
    {
      name: "Apocalypse Now",
      img: "https://m.media-amazon.com/images/S/pv-target-images/9ad7320b661134e60de3123aa76a36eaa5c75e0c7f2f8ef070719daced740889.jpg"
    },
    {
      name: "The Wolf of Wall Street",
      img: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg"
    },
    {
      name: "Snatch",
      img: "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"
    },
  ];

  const bg = {
    backgroundColor: headerToggle ? "white" : "#1a1f25",
  };


  return (
    <div style={bg} className="App">
      <Helmet>
        <title>Laba 7 | {page.title}</title>
        <link rel="icon" href={page.favicon} />
      </Helmet>
      <Header  headerToggle={headerToggle} setHeader={setHeader} />
      {headerToggle ? <City /> : <Letterboxd products={products} />}
    </div>
  );
}

export default App;
