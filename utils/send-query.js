import axios from "axios";
import { config } from "dotenv";

config();

export default async function sendQuery(query, variables) {
  const res = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  });

  return res.data;
}
