// import {Routes,Route,Link} from 'react-router-dom'
import { QuoteContainer } from "./components/Quotes";
import { Icon } from "./components/Icon"
import { Color } from "./store"
import { useEffect, useState } from "react";

const axios = require('axios').default;
const URL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/"

let quotes
axios.get(URL)
  .then(function (response) {
    // handle success

    quotes = response.data.quotes
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })


function App() {
  const [color, setColor] = useState(Color.color1)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setIndex(Math.floor(Math.random() * 100))
    document.body.style.background = color
  }, [color])

  const handleClick = () => {
    const value = "color" + (Math.floor(Math.random() * 13) + 1)
    setColor(Color[value])
  }


  return (
    <div className="App">

      <QuoteContainer color={color} data={quotes[index]} />
      <div className="sharing">
        <Icon color={color} />
        <button style={{ background: color }} className="hoverEffect" onClick={handleClick}>new Quote</button>
      </div>

    </div>
  )
}

export default App;
