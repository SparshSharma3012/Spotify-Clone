import React from "react";
import "./Footer.css";
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';



function Footer(){
    return(
        <div className="footer">
            <div className="footer_left">
                <img src="https://images.genius.com/4113884cfc8f4508793a896f54cd7913.1000x1000x1.png" className="footer_albumlogo" />
                <h4>Waiting</h4>
                <br/>
                <p>Frosty</p>
            </div>

            <div className="footer_center">
                <ShuffleRoundedIcon fontSize="small" className="footer_icon"/>
                <SkipPreviousRoundedIcon fontSize="small" className="footer_icon"/>
                <PlayCircleRoundedIcon fontSize="large" className="footer_icon"/>
                <SkipNextRoundedIcon fontSize="small" className="footer_icon"/>
                <RepeatRoundedIcon fontSize="small" className="footer_icon"/>
                
            </div>
                
            <div className="footer_right">
            <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownRoundedIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default Footer;