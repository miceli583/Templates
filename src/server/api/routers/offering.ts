import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const offeringRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.offering.findMany({
      orderBy: { order: "asc" },
    });
  }),

  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.offering.findMany({
        where: { category: input.category },
        orderBy: { order: "asc" },
      });
    }),
});
