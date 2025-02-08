import { Request, Response, NextFunction } from "express";

const setCorsHeaders = (req: Request, res: Response, next: NextFunction) => {
	const allowedOrigin = process.env.FRONTEND_URL!;

	res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader("Access-Control-Allow-Credentials", "true");

	// Handle preflight requests
	if (req.method === "OPTIONS") {
		res.status(204).end();
		return;
	}

	next();
};

export default setCorsHeaders;

