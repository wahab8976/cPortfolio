// models/Service.ts
import mongoose, { Schema, model, models } from 'mongoose';

const ServiceSchema = new Schema({
    tag: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
});


const Service = models.Service || model('Service', ServiceSchema);

export default Service;