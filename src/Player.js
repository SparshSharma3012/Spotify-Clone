import React from "react";
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({spotify}){
    return(
        <div className="Player">
            <div className="Player_Body">
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
        
        <Footer />
        </div>
    );
}

export default Player;