import type { NextAuthOptions } from "next-auth";
export declare const authOptions: NextAuthOptions;
declare const wrappedHandler: import("@/utils/withErrorLogging").ApiHandler;
export { wrappedHandler as GET, wrappedHandler as POST };
export default wrappedHandler;
