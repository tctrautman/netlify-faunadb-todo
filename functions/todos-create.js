const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  console.log("Function `todo-create` invoked", data);

  const todoItem = {
    data: data
  };

  // Construct FaunaDB query
  return client
    .query(q.Create(q.Ref("classes/todos"), todoItem))
    .then(response => {
      console.log("success", response);

      return {
        statusCode: 200,
        body: JSON.stringify(response)
      };
    })
    .catch(error => {
      console.log("error", error);

      return {
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};
