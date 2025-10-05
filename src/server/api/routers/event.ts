import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const eventRouter = createTRPCRouter({
  getUpcoming: publicProcedure.query(({ ctx }) => {
    return ctx.db.groupEvent.findMany({
      where: {
        eventDate: {
          gte: new Date(),
        },
      },
      orderBy: { eventDate: "asc" },
    });
  }),

  getFeatured: publicProcedure.query(({ ctx }) => {
    return ctx.db.groupEvent.findMany({
      where: {
        featured: true,
        eventDate: {
          gte: new Date(),
        },
      },
      orderBy: { eventDate: "asc" },
      take: 3,
    });
  }),
});
