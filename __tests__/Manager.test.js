const Manager = require('../lib/Manager');

// Create Manager as an object
test('create Manager object', () => {
    const manager = new Manager('Analiza', 1738, 'analizaboehning@gmail.com', 916);

    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('gets role', () => {
    const manager = new Manager('Analiza', 1738, 'analizaboehning@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});