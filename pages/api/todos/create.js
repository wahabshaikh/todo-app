import sendQuery from "../../../utils/send-query";

const CREATE_TODO = `
  mutation($text: String!) {
    createTodo(data: {text: $text, completed: false }) {
      _id
      text
      completed
    }
  }
`;

export default async function handler(req, res) {
  const { text } = req.body;
  const { data, errors } = await sendQuery(CREATE_TODO, { text });

  if (req.method === "POST") {
    if (errors) {
      res.status(500).json(errors);
      return;
    }

    res.status(200).json({ newTodo: data.createTodo });
  }
}
