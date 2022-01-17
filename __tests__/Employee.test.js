const Employee = require('../lib/Employee');

test('Employee constructor function has all required properties', () => {
    const employee = new Employee('Jim Halpert', "jim.halpert@office.net", 1);

    // testing static properties
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    //testing methods
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});