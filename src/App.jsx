import './App.css'
import Headers from './Headers'
import Socialmedia from './Socialmedia'
import Cards from './cards'
import Carousel from './Carousel'

function App() {

  return (
    <>
      <div className="main">
        <Headers />
        <Cards/> 
        <Carousel />
        <Socialmedia/>
      </div>
    </>
  )
}

export default App
