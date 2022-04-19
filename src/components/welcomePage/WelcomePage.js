import React from 'react';
import './WelcomePage.css';

export default class WelcomePage extends React.Component{
    render(){
        const title = "Welcome to RPmodTool!"
        return(
            <div className = "header">
                <h1>{title}</h1>
                <img src = "https://steamuserimages-a.akamaihd.net/ugc/1741196496533213680/29838CA0621C6FC58575B5FA9AD9859D2FA02C63/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></img>
            </div>
        )
    }
}