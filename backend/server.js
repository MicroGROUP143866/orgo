const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const routes=require('./api');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose
  .connect('mongodb://localhost:27017/Oas')
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log("Error is ", err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.disable('etag');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(morgan('tiny')); // Http Request Logger
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));