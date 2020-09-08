import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
  winter: {
    text: 'Let\'s go skiing!',
    iconName: 'snowflake'
  },
  spring: {
    text: 'Let\'s go for a drive!',
    iconName: 'road'
  },
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  autumn: {
    text: 'Let\'s go for a ride!',
    iconName: 'bicycle'
  }
}

const getSeason = (currentPosition) => {
  const currentMonth = new Date().getMonth();

  if (currentMonth >= 0 && currentMonth < 3) {
    return currentPosition > 0 ? 'winter' : 'summer';
  } else if (currentMonth >= 3 && currentMonth <= 5) {
    return currentPosition > 0 ? 'spring' : 'autumn';
  } else if (currentMonth >= 5 && currentMonth < 9) {
    return currentPosition > 0 ? 'summer' : 'winter';
  } else if (currentMonth >= 9 && currentMonth < 11) {
    return currentPosition > 0 ? 'autumn' : 'spring';
  } else {
    return currentPosition > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({currentPosition}) => {
  const season = getSeason(currentPosition);
  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`}></i>
    </div>
  )
}

export default SeasonDisplay;
