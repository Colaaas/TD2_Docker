const express = require('express');
const redis = require('redis');
const app = express();
const port = 3000;

const redisClient = redis.createClient({
  url: 'redis://redis:6379',
});

redisClient.on('error', err => console.log('Erreur Redis', err));

app.get('/', async (req, res) => {
  try {
    const visits = await redisClient.incr('visits');
    res.send(`Bonjour depuis Docker ! Vous êtes le visiteur numéro ${visits}`);
  } catch (error) {
    res.status(500).send('Erreur serveur : ' + error.message);
  }
});

app.listen(port, async () => {
  await redisClient.connect();
  console.log(`L'application écoute sur le port ${port}`);
});
  