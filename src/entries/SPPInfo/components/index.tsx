import React, { useEffect } from "react";
import { fetchUserInfo } from "../api";

export const SppInfo: React.FC = () => {
 useEffect(()=>{
   const userInfo = fetchUserInfo()
   console.log(userInfo)
 },[])
  return (
    <div>
      <div>
        <div>
          <img src="./graph.png" alt="icon graph"/>
          <p> СПП:29</p>
        </div>
      </div>
      <div>До СПП:100</div>
    </div>
  )
}
