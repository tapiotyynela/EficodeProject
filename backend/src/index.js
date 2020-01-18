const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');

const appId = "1a7a4713e76220ad48aa51eedc0ddd88";
const mapURI = "http://api.openweathermap.org/data/2.5";
const targetCity = "Helsinki";

const port = process.env.BACKEND_PORT;

const app = new Koa();

app.use(cors());

const fetchWeather = async () => {
  const endpoint = `${mapURI}/weather?q=${targetCity}&appid=${appId}&units=metric`;
  const response = await fetch(endpoint);
  return response ? response.json() : {}
};

router.get('/api/weather', async ctx => {
  const weatherData = await fetchWeather();

  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData ? weatherData : {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
