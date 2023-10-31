import React, { useEffect } from 'react'
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import { ProductStatistics } from "../widjet";

const App: React.FC = () => {

  return (
    <div className='flex flex-col w-250 shadow-lg h-400 border-2 bg-white rounded-[10px] border-slate-400'>
      <ProductStatistics/>
    </div>
  )
}

const container = document.createElement('div')

if (!container) {
  throw new Error("Can not find AppContainer");
}

container.style.cssText = 'position:fixed; z-index:1000; top: 10%; right: 5%;'
const wrapper = document.getElementById('body-layout')
wrapper.appendChild(container)
const root = createRoot(container)
root.render(<App/>)

