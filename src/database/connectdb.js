import mongoose from "mongoose";

const USER = encodeURIComponent(process.env.DB_USER)
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const CLUSTER = process.env.DB_CLUSTER0;
const NAME_DB = process.env.DB_NAME;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/${NAME_DB}` // prettier-ignore

try {
    await mongoose.connect(MONGO_URI);
    console.log('👨‍💻  Connected');
} catch (error) {
    console.log('Error de conexión: ' + error);
}