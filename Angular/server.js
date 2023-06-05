// const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const { port, mongoURI } = require('./config');
const todoRoutes = require('./routes/todos');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
})
.then(() => console.log('MongoDB is connected'))
.catch((err) => console.log(err));

// app.set('port', process.env.PORT || port);
// app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'));

app.use(cors());

app.use('/api/todos', todoRoutes);

// var server = http.createServer(app);
// server.listen(app.get('port'), function () {
//   console.log('Express server listening on: http://localhost:' + app.get('port'));
// });

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/public'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    })
}

app.listen(port, () => console.log("Server is listening at port " + port + "..."))
