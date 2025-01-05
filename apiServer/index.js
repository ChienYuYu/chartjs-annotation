const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const testData = require('./testData')

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

//處理所有路由，並返回 index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/testData', (req, res) => {
  res.send(testData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
