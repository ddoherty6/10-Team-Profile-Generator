const Manager = require('../lib/Manager.js');

test('Manager class function has all required properties', () => {
    const manager = new Manager('Jim Halpert', "jim.halpert@office.net", 1, 405);

    // testing static properties
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toBeTruthy();

    //testing methods
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});