class Department {
  id: string;
  name: string;
  protected  employees: string[] = [];

  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }
  describe(this: Department) {
    console.log('Department ' + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(
    id: string,
    name: string,
    public admin: string[],
    private reports: string[]
  ) {
    super(id, name);
    this.admin = admin;
  }
  addEmployee(employee: string): void {
      if(employee === ''){
        return;
      }
      this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  getReport() {
    console.log(this.reports);
  }
}

const house = new Department('1', 'House');
house.addEmployee('bryan');
house.addEmployee('Castle');
console.log(house.describe());
console.log(house.printEmployeeInformation());
// const copy = { describe: house.describe, name: 'copy' , employees:['fsf']: string[] };

// console.log(copy.describe());
