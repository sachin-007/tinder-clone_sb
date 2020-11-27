import React from "react";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import './SwipeButtons.css';
  
  const SwipeButtons = () => {
      return (
          <div className="swipeButtons">
              <IconButton className="swipeButton__replay">
              <ReplayIcon fontSize="large" />
              </IconButton>
              <IconButton className="swipeButton__close">
              <CloseIcon fontSize="large" />
              </IconButton>
              <IconButton className="swipeButton__star">
              <StarRateIcon fontSize="large" />
              </IconButton>
              <IconButton className="swipeButton__favorite">
              <FavoriteIcon fontSize="large" />
              </IconButton>
              <IconButton className="swipeButton__flash">
              <FlashOnIcon frontSize="large" />
              </IconButton>
          </div>
      );
  };
  
  export default SwipeButtons;
  