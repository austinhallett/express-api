import mongoose from 'mongoose';

export interface ExampleInput {
    name: string;
    description: string;

}

export interface ExampleDocument extends ExampleInput, mongoose.Document {
    created: Date;
    updated: Date;
}

const exampleSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true    
    },
    description:
    {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const ExampleModel = mongoose.model('Example', exampleSchema);

export default ExampleModel;