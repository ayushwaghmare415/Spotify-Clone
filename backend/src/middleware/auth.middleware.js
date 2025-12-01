import { clerkClient } from "@clerk/express";

export const verifyAuth = (req, res, next) => {
	// Simply pass through - clerkMiddleware handles token verification
	next();
};

export const protectRoute = async (req, res, next) => {
	try {
		const auth = await req.auth();
		console.log("protectRoute - Auth object userId:", auth?.userId);
		
		if (!auth?.userId) {
			console.log("protectRoute - No userId found");
			return res.status(401).json({ message: "Unauthorized - you must be logged in" });
		}
		console.log("protectRoute - User authenticated, userId:", auth.userId);
		next();
	} catch (error) {
		console.log("Error in protectRoute:", error.message);
		return res.status(401).json({ message: "Unauthorized - you must be logged in" });
	}
};

export const requireAdmin = async (req, res, next) => {
	try {
		const auth = await req.auth();
		console.log("requireAdmin - Auth userId:", auth?.userId);
		
		if (!auth?.userId) {
			console.log("requireAdmin - Auth failed: no userId");
			return res.status(401).json({ message: "Unauthorized - you must be logged in" });
		}

		console.log("requireAdmin - Fetching user from Clerk with userId:", auth.userId);
		let currentUser;
		try {
			currentUser = await clerkClient.users.getUser(auth.userId);
			console.log("requireAdmin - User from Clerk:", currentUser.primaryEmailAddress?.emailAddress);
		} catch (clerkError) {
			console.log("requireAdmin - Error fetching user from Clerk:", clerkError.message);
			return res.status(500).json({ message: "Error verifying admin status" });
		}

		const adminEmail = process.env.ADMIN_EMAIL;
		const userEmail = currentUser.primaryEmailAddress?.emailAddress;
		console.log("requireAdmin - Admin email:", adminEmail);
		console.log("requireAdmin - User email:", userEmail);
		console.log("requireAdmin - Is admin:", adminEmail === userEmail);

		const isAdmin = adminEmail === userEmail;

		if (!isAdmin) {
			console.log("requireAdmin - User is not admin");
			return res.status(403).json({ message: "Unauthorized - you must be an admin" });
		}

		console.log("requireAdmin - User is admin, proceeding");
		next();
	} catch (error) {
		console.log("Error in requireAdmin:", error.message);
		return res.status(500).json({ message: "Internal server error: " + error.message });
	}
};
