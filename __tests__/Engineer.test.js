const Engineer = require('../lib/Engineer');

// Create Engineer as an object
test('create Engineer object', () => {
    const engineer = new Engineer(any(String), any(Number), any(String), any(String));

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets value of Engineers GitHub', () => {
    const engineer = new Engineer(any(String), any(Number), any(String), any(String));

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role', () => {
    const engineer = new Engineer(any(String), any(Number), any(String), any(String));

    expect(engineer.getRole()).toEqual('Engineer');
});