import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SongRow from "./SongRow";

function Body({spotify}){
    const[{discover_weekly}, dispatch]=useDataLayerValue();

    

    return(
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body_infotext">
                <strong>PLAYLIST</strong>
                <h2>{discover_weekly?.name}</h2>
                <p>{discover_weekly?.description}</p>
                </div>
                
            </div>
            <div className="lower_body">
                <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledRoundedIcon className="play"/>
                    <MoreHorizRoundedIcon/>
                </div>
                <hr />
                
                {discover_weekly?.tracks.items.map(item=><SongRow track={item.track}/ >)}
                </div>
            </div>
        </div>
    );
}
export default Body;