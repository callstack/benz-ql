module.exports = {
  Query: {
    hello: (_, __, { authToken }) => {
      console.log(authToken);
      return 'Hello world!';
    },
  },
};
