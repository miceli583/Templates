import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

export const createTRPCContext = (opts: { headers: Headers }) => {
  // Import db lazily to avoid build-time initialization
  const { db } = require("~/server/db");
  return {
    db,
    ...opts,
  };
};

const t = initTRPC.context<ReturnType<typeof createTRPCContext>>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createCallerFactory = t.createCallerFactory;

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;
