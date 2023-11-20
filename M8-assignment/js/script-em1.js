// JavaScript

// Function to build the grid
function buildGrid(arr) {
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear existing rows
  
    for (var employee of arr) {
      var row = `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.extension}</td><td>${employee.email}</td><td>${employee.department}</td></tr>`;
      tbody.innerHTML += row;
    }
  }
  
  // Function to add an employee
  function addEmployee(arr, newEmployee) {
    arr.push(newEmployee);
    buildGrid(arr);
    storeData(arr);
  }
  
// Function to remove an employee
//   function removeEmployee(arr, employeeId) {
//     var index = arr.findIndex(employee => employee.id === employeeId);
//     if (index !== -1) {
//       arr.splice(index, 1);
//       buildGrid(arr);
//       storeData(arr);
//     }
// }
  
  // Function to store data in localStorage
//   function storeData(arr) {
//     localStorage.setItem('employeeData', JSON.stringify(arr));
//   }
  
// Function to retrieve data from localStorage
//   function retrieveData() {
//     var storedData = localStorage.getItem('employeeData');
//     return storedData ? JSON.parse(storedData) : [];
//   }
  
  // Load initial set of employees
  var initialEmployees = [
    { id: 1, name: 'John Doe', extension: 1234, email: 'john@example.com', department: 'IT' },
    // Add more initial employees
  ];
  
  // Initialize the array with initial data or retrieve from localStorage
  var employeesArray = retrieveData().length ? retrieveData() : initialEmployees;
  
  // Build the initial grid
  buildGrid(employeesArray);
  