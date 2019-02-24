import React, { Component } from 'react';


export default class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }


    render() {
        return (
            <React.Fragment>
                <div className={"home-background-container"} id={"home-section-1"}>
                    <div className={"home-title-wrapper pt-5"}>
                        <br/>
                        <br/>
                        <h1 className={"display-2 "}><strong>dusette creative</strong></h1>
                        <ul className={"list-inline home-subtitle-list"}>
                            <li className={"list-inline-item home-subtitle-list-item"}>
                                edgy
                            </li>
                            <li className={"list-inline-item home-subtitle-list-item"}>
                                innovative
                            </li>
                            <li className={"list-inline-item home-subtitle-list-item"}>
                                inspired
                            </li>
                        </ul>
                        <img className={"down-arrow"}
                             src="/static/DCv4/img/icons/down-arrow.png"
                             id={"home-section-1-next"}
                             alt=""
                             onClick={this.handleClick}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}