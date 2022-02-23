import React from "react";
import "./Header.css";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useDataLayerValue } from "./DataLayer";
import { Avatar } from "@mui/material";


function Header(){
    const[{user}, dispatch]=useDataLayerValue();

    return(
        <div className="header">
            <div className="header_left">
                <SearchRoundedIcon />
                <input
                placeholder="Search for artists, Songs or Albums"
                type="text" />
            </div>
            <div className="header_right">
                <Avatar alt={user?.display_name} src={user?.images[0].url}  />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header