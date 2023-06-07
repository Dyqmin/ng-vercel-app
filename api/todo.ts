import { VercelRequest, VercelResponse } from "@vercel/node";
import { db } from "@vercel/postgres";

export default async function (request: VercelRequest, response: VercelResponse) {
  const client = await db.connect();

  switch (request.method) {
    case 'GET':
      const todosQuery = await client.sql
        `SELECT * FROM todos;`;

      response.status(200).json({
        todos: todosQuery.rows,
      });
      break;
    case 'POST':
      const q = request.body;

      const newTodosQuery = await client.sql
        `INSERT INTO todos (description, is_done) VALUES (${q['description']}, false);`;

      response.status(200).json({
        todos: newTodosQuery,
      });
      break;
    default:
      response.status(405).send({
        message: `Method not supported`,
      });
  }
};
