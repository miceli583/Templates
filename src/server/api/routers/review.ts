import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const reviewRouter = createTRPCRouter({
  getFeatured: publicProcedure.query(({ ctx }) => {
    return ctx.db.review.findMany({
      where: {
        approved: true,
        featured: true,
      },
      orderBy: { createdAt: "desc" },
      take: 6,
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.review.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
    });
  }),
});
