import sendQuery from "../../../utils/send-query";

const DELETE_TODO = `
  mutation($id: ID!) {
    deleteTodo(id: $id) {
      _id
    }
  }
`;

export default async function handler(req, res) {
  const { id } = req.body;
  const { data, errors } = await sendQuery(DELETE_TODO, { id });

  if (req.method === "POST") {
    if (errors) {
      res.status(500).json(errors);
      return;
    }

    res.status(200).json({ deletedTodo: data.deleteTodo });
  }
}
