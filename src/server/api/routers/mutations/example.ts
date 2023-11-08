import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const exampleRouter__MUTATION = createTRPCRouter({
  test: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation( ({ input: { id } }) => {
      // Call db to do stuff (in this DIR => src/server/queries)
      return {
        message:`the post with the id ${id} was successful` 
      }
    }),

});
