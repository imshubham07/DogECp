import './App.css'
import DrugExperimentUI from './pages/DrugExperimentUI'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault()
    const disableKeys = (e) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', disableRightClick)
    document.addEventListener('keydown', disableKeys)

    return () => {
      document.removeEventListener('contextmenu', disableRightClick)
      document.removeEventListener('keydown', disableKeys)
    }
  }, [])

  return (
    <>
      <DrugExperimentUI />
    </>
  )
}

export default App
