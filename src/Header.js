import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import { Link, useHistory } from "react-router-dom";  //use hisroey is a good react hool


function Header({ backButton }) {
    const history = useHistory();
    return (
  
    <div className="Header">
      {backButton ? (
          <IconButton onClick={()=> history.replace(backButton)}>
            <ArrowBackIosIcon fontSize="large" className="header__icon" />   {/*backButton? so this is for there is back button  and  ():() replace this with this */}
          </IconButton>
        ):(
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
        )}
        
        <Link to="/">
        <img className="header__logo"
        src="data:image/jpeg;base64,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"
        alt="tinder logo"
        />
        </Link>
        {/* <h1>Lets build Tinder Clone App</h1> */}

        <Link to="chat">
        <IconButton>
        <ForumIcon className="header__icon" fontSize="large"/>
        </IconButton>
        </Link>

      {/* Header */}

      {/* Tinder Cards */}
      {/* Buttons belows the card */}

      {/* chats screen */}
      {/*individual chat screen  */}

    </div>
    );
}

export default Header;
