import React, { useState } from 'react'
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import { ProductStatistics } from "../widjet";

interface IAction {
  massage?: string;
  url?: string
}

const App: React.FC = () => {
  const constantMock = window.fetch;
  window.fetch = function() {
    return new Promise((resolve, reject) => {
      constantMock.apply(this, arguments)
        .then((response) => {
          if (response) {
            response.clone().json() //the response body is a readablestream, which can only be read once. That's why we make a clone here and work with the clone
              .then( (json) => {
                console.log(json);
                //Do whatever you want with the json
                resolve(response);
              })
              .catch((error) => {
                console.log(error);
                reject(response);
              })
          }
          else {
            console.log(arguments);
            console.log('Undefined Response!');
            reject(response);
          }
        })
        .catch((error) => {
          console.log(error);
          //@ts-ignore
          reject(response);
        })
    })
  }
  const [actionBackground, setActionBackground] = useState<IAction>({})

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
      setActionBackground(request)
    }
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
