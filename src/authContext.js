export default ({ req }) => ({
  authToken: req.headers.authorization,
});
