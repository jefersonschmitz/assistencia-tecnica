import './App.css'
import Header from './components/header'
import Start from './components/start'
import Services from './components/services'
import About from './components/about'

function App() {
  return (
    <>
      <Header />
      <main>
        <Start />
        <Services />
        <About />
      </main>
    </>
  )
}

export default App
