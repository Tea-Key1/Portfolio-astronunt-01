import React, { useState } from 'react';

export default function Underlay(){
    return (
        <>
            <div className="page-whole-wrapper">
                <div className="menu-bar-wrapper">
                    <div className="menu-bar"></div>
                </div>
                <div className="navigation-wrapper">
                    <div className="navigation">
                    </div>
                </div>
                <div className="section01-wrapper" style={{ position: "relative", width: "80vw", height: "100vh",  left: "10vw"}}>
                    <div className="title-wapper">
                        <div className="title"></div>
                    </div>
                    <div className="content-wrapper" id="link1">
                        <div className="content"></div>
                    </div>
                </div>
                <div className="section02-wrapper" style={{ position: "relative", width: "80vw", height: "100vh",  left: "10vw"}}>
                    <div className="title-wapper">
                        <div className="title"></div>
                    </div>
                    <section className="content-wrapper" id="link2">
                        <div className="content"></div>
                    </section>
                </div>
                <div className="section03-wrapper" style={{ position: "relative", width: "80vw", height: "100vh",  left: "10vw"}}>
                    <div className="title-wapper">
                        <div className="title"></div>
                    </div>
                    <div className="content-wrapper" id="link3">
                        <div className="content"></div>
                    </div>
                </div>
                <div className="section04-wrapper" style={{ position: "relative", width: "80vw", height: "100vh",  left: "10vw", backgroundColor: "#3A4F5E", opacity: "0.5"}}>
                    <div className="title-wapper">
                        <div className="title"></div>
                    </div>
                    <div className="content-wrapper" id="link4">
                        <div className="content"></div>
                    </div>
                </div>
            </div>
        </>
    )
}