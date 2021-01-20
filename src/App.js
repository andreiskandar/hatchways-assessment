import { useEffect, useState } from 'react';
import Students from './components/Students';
import Filter from './components/Filter';
import { filterTagFunction } from './helpers/helper';

import './App.css';

function App() {
  const HATCHWAYS_URL = 'https://api.hatchways.io/assessment/students';
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchName, setSearchName] = useState([]);
  const [searchTag, setSearchTag] = useState([]);

  function addTagsArray(newTag, studentIndex) {
    const addTagIntoStudentData = [...fetchedData];
    addTagIntoStudentData[studentIndex].tags.push(newTag);
    setFetchedData(addTagIntoStudentData);
  }

  function fetchAPI(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const addTagsArray = [...data.students].map((student) => ({ ...student, tags: [] }));
        setFetchedData([...addTagsArray]);
        setFilteredData([...addTagsArray]);
        setSearchName([...addTagsArray]);
        setSearchTag([...addTagsArray]);
      })
      .catch((err) => console.error(err));
  }

  function filterNameFunction(str) {
    const filterName = [];
    fetchedData.map((student) => {
      const { firstName, lastName } = student;
      const fullName = `${firstName} ${lastName}`.toLowerCase();
      if (fullName.includes(str)) {
        return filterName.push(student);
      }
      return null;
    });

    const filterTag = [];
    searchTag.map((student) => {
      const { firstName, lastName } = student;
      const fullName = `${firstName} ${lastName}`.toLowerCase();
      if (fullName.includes(str)) {
        return filterTag.push(student);
      }
      return null;
    });

    setFilteredData(filterTag);
    setSearchName(filterName);
  }

  function filterTagFunction(str) {
    if (str) {
      const searchFilter = [];
      fetchedData.map((student) => {
        let foundTag = false;
        student.tags.forEach((tag) => {
          if (tag.includes(str)) {
            foundTag = true;
          }
        });
        if (foundTag) {
          return searchFilter.push(student);
        }
        return null;
      });

      const newSearchFilterWithTag = [];
      filteredData.map((student) => {
        let foundTag = false;
        student.tags.forEach((tag) => {
          if (tag.includes(str)) {
            foundTag = true;
          }
        });
        if (foundTag) {
          return newSearchFilterWithTag.push(student);
        }
        return null;
      });
      setFilteredData(newSearchFilterWithTag);
      setSearchTag(searchFilter);
    } else {
      setFilteredData(searchName);
      setSearchTag(fetchedData);
    }
  }
  useEffect(() => {
    fetchAPI(HATCHWAYS_URL);
  }, []);

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
