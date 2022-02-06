import type { NextApiRequest, NextApiResponse } from 'next'
import { cats } from '../../../data'

type TypeCats = typeof cats;
type Data = TypeCats;

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json(cats)
}

export default handler;