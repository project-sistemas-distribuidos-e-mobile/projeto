import { Request, Response } from "express";

const index = function(req: Request, res: Response){
    res.send('teste');
}

export default index;