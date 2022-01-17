const Engineer = require('../lib/Engineer.js');

test('Engineer constructor function has all required properties', () => {
    const engineer = new Engineer('Jim Halpert', "jim.halpert@office.net", 1, "jimbo-code");

    // testing static properties
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

    //testing methods
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});