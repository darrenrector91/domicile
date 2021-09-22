const express = require('express');
const app = express();
const dotenv = require('dotenv')

dotenv.config()

app.get('/',(req,res) => res.send('App is running'));

const PORT = process.env.REACT_APP_PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));