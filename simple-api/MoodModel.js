import mongoose from "mongoose";

const MoodSchema = new mongoose.Schema({
    mood: {
        type: String,
        enum: ["angry", "sad", "normal", "happy", "very happy"],
        required: true,
    },
    comment: {
        type: String,
        maxlength: 255,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { 
    versionKey: false,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => {
            ret.id = ret._id;
            ret.createdAt = ret.createdAt.toISOString().split('T')[0];
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    } 
});

export const Mood = mongoose.model("Mood", MoodSchema);
