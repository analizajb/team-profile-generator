const Engineer = require('../lib/Engineer');

// Create Engineer as an object
test('create Engineer object', () => {
    const engineer = new Engineer('Analiza', 1738, 'analizaboehning@gmail.com', 'analizajb');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets value of Engineers GitHub', () => {
    const engineer = new Engineer('Analiza', 1738, 'analizaboehning@gmail.com', 'analizajb');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role', () => {
    const engineer = new Engineer('Analiza', 1738, 'analizaboehning@gmail.com', 'analizajb');

    expect(engineer.getRole()).toEqual('Engineer');
});