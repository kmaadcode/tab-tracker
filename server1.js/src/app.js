const express = require('express');
/* const bodyParser = require('body-parser'); */
const cors = require('cors');
const db = require('./models/index.js');

const app = express();
/* var corsOptions = {
  origin: 'https://localhost:8082',
};
 */
// middleware
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* app.use(bodyParser.json()); */

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to kmaadcode application' });
});

db.sequelize.sync();

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
