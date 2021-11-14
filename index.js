const employee = {
name: "Chester",
streetAddress: "2867",
}
function updateEmployeeWithKeyAndValue(Object, key, value){
    const newemployee = {...employee}
    newemployee[key]= value; 
            return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value){
     employee[key] = value;
     return employee;
}
function deleteFromEmployeeByKey(object, key){
    const deleteemployee = {...employee};
    delete deleteemployee.name;
    return deleteemployee;
}
function destructivelyDeleteFromEmployeeByKey(object, key){
    delete employee.name
        return employee
}
