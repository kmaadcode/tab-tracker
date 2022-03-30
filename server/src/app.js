console.log('hello');
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 8081;

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered ! have fun!!`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});