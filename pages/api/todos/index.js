import sendQuery from "../../../utils/send-query";

const GET_ALL_TODOS = `
  query {
    allTodos {
      data {
        _id
        text
        completed
      }
    }
  }
`;

export default async function handler(req, res) {
  const { data, errors } = await sendQuery(GET_ALL_TODOS);

  if (errors) {
    res.status(500).json(errors);
    return;
  }

  res.status(200).json({ todos: data.allTodos.data });
}
