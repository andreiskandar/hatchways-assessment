import { useEffect, useState } from 'react';
import Students from './components/Students';
import Filter from './components/Filter';
import useApplicationData from './hooks/useApplicationData';

import './App.css';

function App() {
  const { filteredData, addTagsArray, filterNameFunction, filterTagFunction } = useApplicationData();

  function renderStudents() {
    return filteredData.map((student, index) => {
      return (
        <div key={index}>
          <Students student={student} index={index} addTagsArray={addTagsArray} />
        </div>
      );
    });
  }

  return (
    <div className='App'>
      <Filter type='Name' filterFunction={filterNameFunction} />
      <Filter type='Tag' filterFunction={filterTagFunction} />
      {renderStudents()}
    </div>
  );
}

export default App;
