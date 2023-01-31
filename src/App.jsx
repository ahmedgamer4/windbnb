import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'

function App() {
  return (
    <div className='min-h-screen bg-white flex flex-col w-11/12 py-5 mx-auto items-center'>
      <Header />
      <Main />
    </div>
  )
}

export default App
