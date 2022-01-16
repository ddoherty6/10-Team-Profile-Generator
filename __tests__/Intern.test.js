const Intern = require('../lib/Intern');

test('Intern class has all required properties', () => {
    const intern = new Intern('Jim Halpert', "jim.halpert@office.net");

    // testing static properties
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

    //testing methods
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role));
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});