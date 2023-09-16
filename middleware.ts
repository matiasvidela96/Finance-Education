import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: ["/", "/startPage"],
    ignoredRoutes: ["/api/getAuth", "/api/getAuth/user_2V6x36Nxevm7ElH13PaKCKT1N0F", "/api/getAuth/user_2V6xtPvpCAD71OOuD9lb3uy0cnZ"]
});


export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
