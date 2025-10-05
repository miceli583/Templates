import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { offeringRouter } from "./routers/offering";
import { reviewRouter } from "./routers/review";
import { bookingRouter } from "./routers/booking";
import { eventRouter } from "./routers/event";

export const appRouter = createTRPCRouter({
  offering: offeringRouter,
  review: reviewRouter,
  booking: bookingRouter,
  event: eventRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
