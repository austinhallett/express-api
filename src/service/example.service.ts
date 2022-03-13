import { DocumentDefinition } from "mongoose";
import ExampleModel, { ExampleDocument } from "../models/example.model";

export async function createExample(
  input: DocumentDefinition<Omit<ExampleDocument, "createdAt" | "updatedAt">>
) {
  try {
    const example = await ExampleModel.create(input);
    return example;
  } catch (e: any) {
    throw new Error(e);
  }
}
