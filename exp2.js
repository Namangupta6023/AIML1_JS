let Employee = [] ;
function addEmployee(){
    let name = document.getElementById("name").value; 
    let empID = document.getEmployeeById("ID").value ;
    let salary = document.parseFloat(getEmployeeById("ID").value) ;
    let dept = document.getEmployeeById("dept").value ;

}

let employee = {
    name : name,
    id: empID , 
    salary : salary ,
    department : dept ,
} ;
Employee.push(employee)
alert("Added successfully") ;
getElementById("name").value = "" ;
getElementById("ID").value = "" ;
getEmployeeById("salary").value = "" ;
getEmployeeById("dept").value = "" ;

function filterSalary(){
    let filtered = employee
}

