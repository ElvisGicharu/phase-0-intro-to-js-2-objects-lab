// Write your solution in this file!
const employee= {name:'Elvis',streetAddress:'Kanairo'};

function updateEmployeeWithKeyAndValue(employee, key, value){ 
    // return Object.assign({},employee,{ [key]:value});
    return{...employee,[key]:value};
};

// function data (name,work,experience){
//     return {...employee,name,work,experience}
//   }
//   console.log(data('James','Analyst',1));
//   console.log(employee);


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }

//   function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,streetAddress){
//     employee= {name,streetAddress};
//     return employee;
// }
// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,'Jane','Choka'));

// console.log(employee);


function deleteFromEmployeeByKey(employee,name){
    const newEmployee={...employee,name}
    delete newEmployee[name];
    return  newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee.name;
    return employee;
}

