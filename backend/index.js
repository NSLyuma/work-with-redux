const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app
  .listen(PORT)
  .on('error', (error) => console.log(`ERROR: ${error.message}`))
  .on('listening', () => console.log(`Server listening port ${PORT}`));
