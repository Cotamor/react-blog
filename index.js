const express = require('express');
const app = express();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
//                          .then(() => console.log('DB connected'))
//                          .catch(err => console.error(err));

mongoose.connect('mongodb+srv://KotaNaka:abc1234@cluster0.dvbvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('DB connected'))
                           .catch(err => console.error(err));

app.get('/', (req, res) =>{
  res.send('hello world')
});



app.listen(5000);