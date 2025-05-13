function filterAndSortEmployees(employees, minAge) {
  return employees
    .filter(({ name, age }) => age > minAge)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export default filterAndSortEmployees;
