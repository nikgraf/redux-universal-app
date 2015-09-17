const STORE = {
  members: [
    {name: 'Max', age: 18},
    {name: 'Moritz', age: 57},
  ],
  alumni: [
    {name: 'Tom', age: 5},
    {name: 'Cherry', age: 3},
  ],
};

module.exports = {
  // Export methods that your schema can use to interact with your database
  getMembers: () => STORE.members,
  getAlumni: () => STORE.alumni,
};
