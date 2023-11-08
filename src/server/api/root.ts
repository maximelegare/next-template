import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter__MUTATION } from "./routers/mutations/example";
import { exampleRouter__QUERY } from "./routers/queries/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example__MUTATION: exampleRouter__MUTATION,
  example__QUERY: exampleRouter__QUERY,
});

// export type definition of API
export type AppRouter = typeof appRouter;
