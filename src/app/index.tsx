import React, { useState } from 'react'
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import { ProductStatistics } from "../widjet";

interface IAction {
  massage?: string;
  url?: string
}

const App: React.FC = () => {

  const [actionBackground, setActionBackground] = useState<IAction>({})
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    setActionBackground(request)
  })
  const url = actionBackground?.url?.split('/').includes('catalog')
  if (url) {
    return (
      <div
        className='z-50 fixed right-[5%] top-[5%] flex flex-col w-250 shadow-lg h-400 border-2 bg-white rounded-[10px] border-slate-400'>
        <ProductStatistics/>
      </div>
    )
  }
  return null
}

const container = document.createElement('div')
const wrapper = document.getElementById('body-layout')
wrapper.appendChild(container)
const root = createRoot(container)
root.render(<App/>)
