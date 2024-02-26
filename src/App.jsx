import './App.css'
import Headers from './Headers'
import Socialmedia from './Socialmedia'
import Cards from './cards'
import Footer from './Footer'

function App() {

  return (
    <>
      <div className="main">
        <Headers />
        <Cards/> 
    
        <Socialmedia/>
        <Footer/>
      </div>
    </>
  )
}

export default App
