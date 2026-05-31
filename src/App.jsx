import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { CurrentForm } from './Form'


function App() {
  const [count, setCount] = useState(0);

  const [formData, setFormData] = useState({

    general: {
      name: '',
      phone: '',
      email: ''
    },

    education: {
      school: '',
      major: '',
      startDate: '',
      endDate: ''
    },

    experience: {
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: ''
    }

  });

  return (
    <>
      <h1>CV Resume project</h1>
          <CurrentForm formData={formData} setFormData={setFormData}/>
    </>
  )
}

export default App
