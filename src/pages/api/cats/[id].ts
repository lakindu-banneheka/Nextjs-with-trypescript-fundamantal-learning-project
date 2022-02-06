import { NextApiRequest, NextApiResponse } from "next";
import { cats } from "../../../../data";

const handler = (req: NextApiRequest, res:NextApiResponse) => {
    const { id } = req.query;
    const cat = cats.find(cat => cat.id === Number(id));
    if(cat !== null){
        res.status(200).json(cat)
    } else {
        res.status(400).json('cat doesnt exist')
    };
};

export default handler;