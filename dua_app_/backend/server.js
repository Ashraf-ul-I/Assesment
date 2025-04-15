import express from 'express';
import cors from 'cors';
import duaRoutes from './routes/routes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', duaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
