import mongoose from "mongoose";

const conectarDB = async() => {
    try {
        mongoose.connect(process.env.URI_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default conectarDB;