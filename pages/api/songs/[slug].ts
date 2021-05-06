import { NextApiRequest, NextApiResponse } from 'next'
const { events } = require('./data.json')

export default (req: NextApiRequest, res: NextApiResponse) => {
  const ev = events.filter((ev) => ev.slug === req.query.slug)
  if (req.method === 'GET') {
    res.status(200).json(ev)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
