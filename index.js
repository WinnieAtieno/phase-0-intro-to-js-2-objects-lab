// Write your solution in this file!
const employee  = {
    name:"Winnie Atieno",
    streetAddress: "B4"
}
//create functions

    // update object properties undestructively
function updateEmployeeWithKeyAndValue(employee,key,value){
   const updatedEmployee = {...employee}; //makes a copy of the original object
   updatedEmployee[key] = value;
   
    return updatedEmployee

}

    //update onject dustructively by changing the original array
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   employee[key] = value;
   return employee
}

    // delete a property undestructively
function deleteFromEmployeeByKey(employee, key){
    const deleteKey = {...employee}
     delete deleteKey[key]
     return deleteKey
}
    // delete a property destructively
    function destructivelyDeleteFromEmployeeByKey(employee, key){
               delete employee[key]
         return employee
    }
 


