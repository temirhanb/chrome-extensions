import React from 'react'
import { createRoot } from "react-dom/client";
import './assets/tailwind.css'
import { ProductStatistics } from "./widjet";

const App: React.FC = () => {

  console.log('hello world')
  return (
    <div className='flex flex-col w-250 h-400 border-2 rounded-[10px] border-slate-400'>
      <ProductStatistics/>
    </div>
  )
}

const container = document.createElement('div')
container.style.cssText = 'position:fixed; z-index:1000; top: 10%; right: 5%;'
const wrapper = document.getElementById('body-layout')
wrapper.appendChild(container)
const root = createRoot(container)
root.render(<App/>)

