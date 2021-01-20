export function filterTagFunction(str) {
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

export function filterNameFunction(str) {
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
