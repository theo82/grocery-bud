import React, { useState } from 'react'
import Form from './Form'
const App = () => {
  const [items, setItems] = useState([])

  return <section className='section-name'>
    <Form />
  </section>
}

export default App
