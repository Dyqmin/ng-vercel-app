import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  const { name = 'World' } = request.query;
  response.status(200).send({
    message: `Hello ${name}!`,
  });
};
