import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const bookingRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        offeringIds: z.array(z.string()).min(1),
        clientStory: z.string().min(10),
        preferredDates: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.bookingRequest.create({
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          offeringIds: JSON.stringify(input.offeringIds),
          clientStory: input.clientStory,
          preferredDates: input.preferredDates,
        },
      });
    }),
});
