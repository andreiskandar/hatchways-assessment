import React from 'react';

const Scores = ({ grades, expand }) => {
  if (grades.length === 0) {
    return null;
  }

  return (
    <div className={`scores__details ${expand ? 'expand' : ''}`}>
      {grades.map((grade, scoreIdx) => (
        <p key={scoreIdx} style={styles.score}>
          {`Test ${scoreIdx + 1} \xa0\xa0\xa0 ${grade} %`}
        </p>
      ))}
    </div>
  );
};

const styles = {
  score: {
    margin: '5px 0',
  },
};

export default Scores;
