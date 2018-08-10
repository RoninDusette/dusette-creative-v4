import React from 'react';


export const HomeLoaderContainer = () => (
  <div id={"loader-wrapper"}>
    <div className={"loader-img-wrapper text-center"}>
    <img src={"/static/DCv4/img/icons/logo-plain.png"} className={"loader-img"} alt=""/>
    </div>
    <h3 id={"loader-text"}><span id={"loader-text-word"}>Loading</span><span id={"loader-text-dot-1"}>.</span><span
      id={"loader-text-dot-2"}>.</span><span id={"loader-text-dot-3"}>.</span></h3>
  </div>
)