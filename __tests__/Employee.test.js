const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Analiza', 1738, 'analizaboehning@gmail.com');

    expect(this.name).toEqual(expect.any(String));
    expect(this.id).toEqual(expect.any(Number));
    expect(this.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Analiza', 1738, 'analizaboehning@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Analiza', 1738, 'analizaboehning@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Analiza', 1738, 'analizaboehning@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Employee('Analiza', 1738, 'analizaboehning@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});