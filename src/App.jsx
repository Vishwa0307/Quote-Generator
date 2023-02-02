import { useState, useEffect } from 'react'
import './App.css'
import QuoteCard from './QuoteCard';
import Buttons from './Buttons';


function App() {
  const [quote, setQuote] = useState(null)
  // const [bgColor, setBgColor] = useState("")


  function generateRandomColor() {
    var randomColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    return randomColor;
  }

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content)
        document.body.style.backgroundColor = generateRandomColor()
      })
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <h1 style={{fontFamily: "Times New Roman"}}>Quote Generator</h1>
      <div className="quote-card">
        <QuoteCard quote={quote} />
        <Buttons getQuote={getQuote} />
      </div>
    </div>
  )
}

export default App
