import React, { useState, useEffect } from 'react';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

const App = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => setCurrentPosition(pos.coords.latitude),
      (err) => setErrorMessage(err.message),
    );
  }, []);

  const displayContent = () => {
    if (currentPosition === null && errorMessage === null) {
      return (
        <LoadingSpinner message="Please allow location permissions in order for app to function." />
      );
    }
    if (currentPosition === null && errorMessage !== null) {
      return `There was a problem gathering your location info: ${errorMessage}`;
    }

    return <SeasonDisplay currentPosition={currentPosition} />;
  };

  return <div className="App">{displayContent()}</div>;
};

export default App;
