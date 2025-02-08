import { Request, Response, NextFunction } from "express";

const setCorsHeaders = (req: Request, res: Response, next: NextFunction) => {
	res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL!);
	res.setHeader("Access-Control-Allow-Headers", "*");
	next();
};
export default setCorsHeaders;
