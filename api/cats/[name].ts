import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  const { name = 'World' } = request.query;
  console.log('tick');
  response.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
  response.status(200).send({
    message: `Hello ${name}!`,
  });
};
