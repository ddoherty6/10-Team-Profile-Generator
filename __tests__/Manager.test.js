const Manager = require('../lib/Manager');

test('Manager class function has all required properties', () => {
    const manager = new Manager('Jim Halpert', "jim.halpert@office.net");

    // testing static properties
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toBeTruthy();

    //testing methods
    expect(manager.getName()).toEqual(expect.stringContaining(employee.name));
    expect(manager.getId()).toEqual(expect.stringContaining(employee.id.toString()));
    expect(manager.getEmail()).toEqual(expect.stringContaining(employee.email));
    expect(manager.getRole()).toEqual(expect.stringContaining(employee.role));
});