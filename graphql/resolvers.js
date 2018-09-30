const phil = {
    name: 'phil',
    age: 19,
    gender: 'male'
}

const resolvers = {
    Query: {
        person: () => phil
    }
};

export default resolvers;