import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    const PORT = process.env.PORT ?? 3003;
    console.log("succesfully connected to mongodb");
    app.listen(PORT, function() {
        console.log(`The server is succesfully running on port: ${PORT} `);
    })
})
.catch((err) => {
    console.log('Error on connection mongodb', err);
});