module.exports = ({ req }) => ({
  authToken: req.headers.authorization,
});
