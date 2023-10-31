import React from 'react'
import { createRoot } from "react-dom/client";

const App: React.FC = () => {

  console.log('hello world')
  return (
    <div>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium at aut, commodi doloremque ea enim est
        eum impedit labore laborum libero nemo nesciunt nobis optio possimus quam recusandae voluptates?</p>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App/>)

