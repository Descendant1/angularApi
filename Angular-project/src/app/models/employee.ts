export  class Employee
{
    id: number ;
    employee_name   : string; 
    employee_salary : number;
    employee_age    : number;
    profile_image   : string;
    isSelected      : boolean;
    // Solution for api response diff.
    name: string;
    salary: number;
    age: number;



    constructor ( id:number
                 ,name   : string
                 ,salary : number
                 ,age    : number
                 ,profile_image   : string  
                ) 
    {
        this.id = id ;
        this.employee_name = name; 
        this.employee_salary = salary; 
        this.employee_age = age; 
        this.profile_image =profile_image; 
        this.isSelected =  false;

    }
}