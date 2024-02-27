import './App.css'
import Headers from './Headers'
import Socialmedia from './Socialmedia'
import Cards from './cards'
import Footer from './Footer'
import Carousel from './Carousel'

function App() {

  return (
    <>
      <div className="main">
        {/* <Headers /> */}
        <Cards/> 
        <Carousel />
        <Socialmedia/>
        <Footer/>
      </div>
    </>
  )
}

export default App
