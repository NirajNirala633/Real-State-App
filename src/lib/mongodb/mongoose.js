import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log('MongoDB ia already connected');
        return;
    }


    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'RealState Next App',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        initialized = true;
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log("MongoDB connection error: " + error);
        
    }
}