import express, { json } from "express";
import morgan from "morgan";

// import routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// init
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/projects',projectRoutes);
app.use('/api/task',taskRoutes);

export default app;
