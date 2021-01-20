import React, { useState } from 'react';

const TagInputForm = ({ index, addTagsArray }) => {
  const [newTag, setNewTag] = useState('');

  function handleChange(e) {
    setNewTag(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTagsArray(newTag, index);
    setNewTag('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input style={styles.tagInputForm} type='text' onChange={handleChange} placeholder='Add a tag' value={newTag} />
      <input style={{ display: 'none' }} type='submit' />
    </form>
  );
};

const styles = {
  tagInputForm: {
    fontFamily: 'inherit',
    fontSize: '16px',
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: '1px #bab7b7 solid',
    padding: '10px 5px',
  },
};

export default TagInputForm;
