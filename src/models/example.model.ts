import mongoose from "mongoose";

export interface ExampleInput {
  name: string;
  description: string;
}

export interface ExampleDocument extends ExampleInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const exampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ExampleModel = mongoose.model<ExampleDocument>("Example", exampleSchema);

export default ExampleModel;
