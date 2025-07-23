// eslint-disable-next-line @typescript-eslint/no-require-imports;
const express = require('express');'const app = express();'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const port = process.env.PORT || 3000;

app.get('/fast', (req, res) => {'  res.status(200).send('Fast response!');'});'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

app.get('/slow', (req, res) => {'  setTimeout(() => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    res.status(200).send('Slow response after 1 second.');'  }, 1000); // 1000 ms delay'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
});

app.get('/very-slow', (req, res) => {'  setTimeout(() => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    res.status(200).send('Very slow response after 2 seconds.');'  }, 2000); // 2000 ms delay'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
});
;
let flakyCounter = 0;
app.get('/flaky', (req, res) => {'  flakyCounter++;'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  if (flakyCounter % 2 === 0) {
    setTimeout(() => {
      res.status(200).send(`Flaky response (Attempt ${flakyCounter}): Slow (1s)`);
    }, 1000);
  } else {
    res.status(200).send(`Flaky response (Attempt ${flakyCounter}): Fast`);
  }
});

app.get('/error', (req, res) => {'  res.status(500).send('Internal Server Error simulation.');'});'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

app.get('/random-error', (req, res) => {'  if (Math.random() < 0.3) { // 30% chance of error'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    res.status(502).send('Random Bad Gateway error.');'  } else {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    res.status(200).send('Randomly OK response.');'  }'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
});


app.listen(port, () => {
  console.warn(`Test server listening at http://localhost:${port}`);
  console.warn('Available endpoints:');'  console.warn(`  http://localhost:${port}/fast`);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  console.warn(`  http://localhost:${port}/slow`);
  console.warn(`  http://localhost:${port}/very-slow`);
  console.warn(`  http://localhost:${port}/flaky`);
  console.warn(`  http://localhost:${port}/error`);
  console.warn(`  http://localhost:${port}/random-error`);
});