import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  getAlumni,
  getMembers
} from './database';

const MemberType = new GraphQLObjectType({
  name: 'Member',
  fields: () => ({
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
  }),
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      members: {
        type: new GraphQLList(MemberType),
        resolve: getMembers,
      },
      alumni: {
        type: new GraphQLList(MemberType),
        resolve: getAlumni,
      },
    }),
  }),
});
