import React from "react";
import "./SongRow.css";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

function SongRow({track="test"}){
    return(
        <div className="songrow">
        <img className="songrow_album" src={track.album.images[0].url} alt=""/>  
        <div className="songrow_info">
            <h1>{track.name}</h1>
            <p>
                {track.artists.map((artists)=>artists.name).join(", ")}.{track.album.name}
            </p>
        </div>  
        </div>
    );
}

export default SongRow