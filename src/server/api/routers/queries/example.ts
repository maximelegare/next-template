import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { ExampleSchema } from "~/server/types/zod/models";

export const exampleRouter__QUERY = createTRPCRouter({
  test: publicProcedure
    .input(z.object({ o_id: z.string() }))
    .query(({ input }) => {
      // Call db to do stuff (in this DIR => src/server/queries)
      const data = { message: `the userId is ${input.o_id}` };


      // Parse in Zod template to validate Data
      const parsedData = ExampleSchema.parse(data);

      return { example: parsedData };
    }),
});
