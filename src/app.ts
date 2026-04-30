import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Matrimony Prisma API Running...');
});

export default app;
