import React from 'react';


export const HomeContent = () => (
  <div className={"home-background-container"} id={"home-section-1"}>
    <div className={"home-title-wrapper pt-5"}>
      <br/>
      <br/>
      <h1>Dusette creativE</h1>
      <ul className={"list-inline"}>
        <li className={"list-inline-item"}>
          edgy
        </li>
        <li className={"list-inline-item"}>
          <i className="fas fa-ellipsis-v"/>
        </li>
        <li className={"list-inline-item"}>
          innovative
        </li>
        <li className={"list-inline-item"}>
          <i className="fas fa-ellipsis-v"/>
        </li>
        <li className={"list-inline-item"}>
          inspired
        </li>
      </ul>
      <img className={"down-arrow"} src="/static/DCv4/img/icons/down-arrow.png" id={"home-section-1-next"} alt=""/>
    </div>
    <div className={"home-section-2-container"} id={"home-section-2"}>
      <h3>blach</h3>
    </div>
  </div>
)