import { getPeople, getById, addPerson, removePerson } from "./db";

const resolvers = {
    Query: {
        people: () => getPeople(),
        person: (_, { id }) => getById(id),
    },
    Mutation: {
        addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
        removePerson: (_, { id }) => removePerson(id)
    }
};

export default resolvers;