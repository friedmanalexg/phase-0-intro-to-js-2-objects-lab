
//here is my employee object
const employee = {
    employeeName: "Davis",
    streetAddress: "123 Main St",
}
//this one is updateEmployeeWithKeyAndValue, spread operator suggested, works
function updateEmployeeWithKeyAndValue(employee, employeeName, value) {
    const newEmployee = {...employee};
    newEmployee[employeeName] = value;
    return employee, newEmployee;
}

//this one works 
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
};

//this one deletes a key property from a new clone, spread operator suggested, works
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee1 = {...employee};
    newEmployee1[key] = value;
    return employee,newEmployee1;
}

//this one destructively deletes employees by key

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}
