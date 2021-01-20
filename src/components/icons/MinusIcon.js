import React from 'react';

const MinusIcon = ({ setDisplayScores, displayScores }) => {
  return (
    <img
      style={styles.button}
      src='assets/minus.png'
      alt='minus'
      className='button'
      onClick={() => setDisplayScores(!displayScores)}
    />
  );
};

const styles = {
  button: {
    height: '40px',
  },
};
export default MinusIcon;
