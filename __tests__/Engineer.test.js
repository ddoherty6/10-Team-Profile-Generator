const Engineer = require('../lib/Engineer');

test('Engineer constructor function has all required properties', () => {
    const engineer = new Engineer('Jim Halpert', "jim.halpert@office.net");

    // testing static properties
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

    //testing methods
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role));
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});