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


app.get('/status', (req, res) => {
    res.send({message:'Server running find !!!'})
} )


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
