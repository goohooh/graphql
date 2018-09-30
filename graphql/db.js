export const people = [
    { 
        id: 1,
        name: 'phil',
        age: 19,
        gender: 'male'
    },
    { 
        id: 2,
        name: 'gyu',
        age: 29,
        gender: 'male'
    },
    { 
        id: 3,
        name: 'tae',
        age: 28,
        gender: 'male'
    },
    { 
        id: 4,
        name: 'jenny',
        age: 19,
        gender: 'female'
    }
];

export const getById = id => people.find(person => id === person.id);
