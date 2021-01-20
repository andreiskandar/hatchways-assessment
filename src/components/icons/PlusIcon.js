import React from 'react';

const PlusIcon = ({ setDisplayScores, displayScores }) => {
  return (
    <img
      style={styles.button}
      src='assets/add.png'
      alt='plus'
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
export default PlusIcon;
