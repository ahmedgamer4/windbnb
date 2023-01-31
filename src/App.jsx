import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className='min-h-screen bg-white flex flex-col w-11/12 py-5 mx-auto items-center pb-40'>
      <Header />
      <Main />
    </div>
  )
}

export default App
