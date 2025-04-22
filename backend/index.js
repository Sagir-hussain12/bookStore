import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.config.js';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3001;


app.use('/api/book', bookRoute);
app.use('/api/user',userRoute )

app.listen(port, () => {
    connectDB()
  console.log(`Server is running on port ${port}`);
});