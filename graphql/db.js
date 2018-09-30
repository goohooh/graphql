export let people = [
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

export const getPeople = () => people;
export const getById = id => people.find(person => id === person.id);
export const addPerson = (name, age, gender) => {
    const newPerson = {
        id: ++people.length,
        name,
        age,
        gender,
    }
    people.push(newPerson);

    return newPerson;
};
export const removePerson = id => {
    const cleanedPeople = people.filter(person => person.id !== id);
        
    if (people.length > cleanedPeople.length) {
        people = cleanedPeople;
        return true;
    } else {
        return false;
    }
};