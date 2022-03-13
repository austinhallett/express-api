import { object, string, TypeOf } from "zod";
export const createExampleSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    description: string({
      required_error: "Description is required",
    }).min(6, "Description must be at least 6 characters long"),
  }),
});

export type CreateExampleInput = TypeOf<typeof createExampleSchema>;
