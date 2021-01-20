import React, { useState } from 'react';
import Scores from './Scores';
import TagInputForm from './TagInputForm';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

const Students = ({ student, index, addTagsArray }) => {
  const [displayScores, setDisplayScores] = useState(false);

  function changeCase(string, stringCase = 'lower') {
    return stringCase === 'upper' ? string.toUpperCase() : string.toLowerCase();
  }

  function getAverageGrades(grades) {
    return grades.reduce((acc, cur) => acc + parseInt(cur), 0) / grades.length;
  }

  function renderTags() {
    if (tags.length > 0) {
      return (
        <div style={styles.tags}>
          {tags.map((tag, index) => (
            <div key={index}>
              <p style={styles.tagName}>{tag}</p>
            </div>
          ))}
        </div>
      );
    }
  }

  const { firstName, lastName, pic, company, grades, skill, email, tags } = student;
  const averageGrades = getAverageGrades(grades);

  return (
    <div style={styles.wrapper}>
      <img style={styles.avatar} src={pic} alt={`${firstName} ${lastName} avatar`} />
      <div style={styles.student_info}>
        <div style={styles.student_name__info}>
          <h1 style={styles.name}>
            {changeCase(firstName, 'upper')} {changeCase(lastName, 'upper')}
          </h1>

          {/* Render 'Plus' or 'Minus' Icon */}
          <div style={styles.button}>
            {!displayScores ? (
              <PlusIcon setDisplayScores={setDisplayScores} displayScores={displayScores} />
            ) : (
              <MinusIcon setDisplayScores={setDisplayScores} displayScores={displayScores} />
            )}
          </div>
        </div>
        <div style={styles.details__container}>
          <p style={styles.details}>Email: {email}</p>
          <p style={styles.details}>Company: {company}</p>
          <p style={styles.details}>Skill: {skill}</p>
          <p style={styles.details}>Average: {averageGrades} %</p>
          {/* Render scores */}
          {displayScores && <Scores grades={grades} />}

          {renderTags()}

          {/* Render tag input form */}
          <TagInputForm index={index} addTagsArray={addTagsArray} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    bordeBottom: '1px #bab7b7 solid',
    alignItems: 'center',
    padding: ' 20px 0',
  },
  student_name__info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85vw',
  },
  student_info: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
  },
  avatar: {
    borderRadius: '50%',
    border: '2px #bab7b7 solid',
    width: '130px',
    height: '130px',
    marginLeft: '20px',
  },
  name: {
    fontSize: '50px',
    fontWeight: 700,
    margin: 0,
  },
  details__container: {
    marginLeft: '20px',
  },
  details: {
    margin: '5px 0',
  },

  tags: {
    display: 'flex',
  },
  tagName: {
    backgroundColor: '#dfdfdf',
    borderRadius: '3px',
    padding: '8px',
    marginRight: '10px',
  },
};
export default Students;
