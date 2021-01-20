import React from 'react';

const Filter = ({ type, filterFunction }) => {
  return (
    <div style={styles.container}>
      <input
        type='search'
        placeholder={`Search by ${type}`}
        style={styles.inputSearch}
        onChange={(e) => filterFunction(e.target.value.toLowerCase())}
      ></input>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '20px',
  },
  inputSearch: {
    width: '100%',
    fontSize: '20px',
    padding: '5px 0 5px 10px',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1px #bab7b7 solid',
  },
};
export default Filter;
