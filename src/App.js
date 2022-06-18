import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react'
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode is enabled', 'Success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is Enabled', 'Success')
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm
          showAlert={showAlert}
          heading="Enter your text to analyze below"
          mode={mode}
        />
      </div>
    </>
  )
}

export default App
