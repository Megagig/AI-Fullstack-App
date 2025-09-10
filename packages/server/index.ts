import express from 'express';

import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Set port from environment variable OR default to 3000
const port = process.env.PORT || 3000;

// Define a basic route
app.get('/', (req: Request, res: Response) => {
   res.send('Hello World');
});
app.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'This is the Backend API endpoint' });
});

// Start the server
app.listen(port, () => {
   console.log(`🚀 Server is running on http://localhost:${port}`);
});
