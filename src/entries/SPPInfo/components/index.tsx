import React, { useState } from "react";

interface IAction {
  massage?: string;
  url?: string
}

export const SppInfo: React.FC = () => {
  const [actionBackground, setActionBackground] = useState<IAction>({})
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    setActionBackground(request)
  })
  const url = actionBackground.url

  const imageGraph = chrome.runtime.getURL("graph.png");
  return (
    <div>
      <div>
        <div>
          <img src={imageGraph} alt="icon graph"/>
          <p> СПП: {url}</p>
        </div>
      </div>
      <div>До СПП:100</div>
    </div>
  )
}
