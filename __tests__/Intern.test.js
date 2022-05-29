const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Analiza', 1738, 'analizaboehning@gmail.com', 'UC Davis');

    expect(intern.school).toEqual(expect.any(String));
});

// Gets school applicable to Intern. Uses getSchool()
test('gets interns school', () => {
    const intern = new Intern('Analiza', 1738, 'analizaboehning@gmail.com', 'UC Davis');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role of this employee which = Intern.
test('gets role of employee', () => {
    const intern = new Intern('Analiza', 1738, 'analizaboehning@gmail.com', 'UC Davis');

    expect(intern.getRole()).toEqual('Intern');
});