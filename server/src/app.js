/* console.log('hello'); */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import db from './models/index.js';

/* import dbConfig from './config/db.config1.js'; */

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'));
app.use(bodyParser.json());
/*  use('./routes')(app); */

app.get('/', (req, res, next) => {
  res.json({message: 'Database Connection to kmaadcode application Done !'})
})
/* app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered ! have fun!!`,
  });
}); */

/* db.sequelize.sync(); */
const PORT = process.env.PORT || 8081;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
