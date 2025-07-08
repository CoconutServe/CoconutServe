# Coconutserve

- The South Asian First Production-ready Backend Developmet Framework
- working with NodeJS
- no need ExpressJS or any other Framework

## 🚀 Overview

Coconutserve is a simple and efficient Node.js backend framework designed to empower developers in South Asia and beyond to build modern APIs quickly — without relying on heavy dependencies. It supports core HTTP methods like GET and POST out of the box and is production-ready for your backend needs.

⚠️ NOTE: This is currently in Beta 1 — actively under development. Use with caution in production.

## 🔥 Key Features

- Minimalist and lightweight — just what you need, nothing more.

- Built entirely on native Node.js modules — no Express or external frameworks required.

- Supports GET and POST routes with easy syntax.

- Designed with South Asian developers in mind — the first of its kind from the region.

- Perfect for fast prototyping and production-level backend APIs.

## 💻 Getting Started

### Installation

``` bash

npm install coconutserve

```

### Basic Usage

```js

const Coconutserve = require('coconutserve');

const app = new Coconutserve();

app.get('/hello', (req, res) => {
  res.send({ message: 'Hello from Coconutserve GET!' });
});

app.post('/submit', (req, res) => {
  console.log('Received data:', req.body);
  res.send({ status: 'Success', data: req.body });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Coconutserve server running on port ${PORT}`);
});


```


## 📡 API

- app.get(path, handler) — define a GET route.

- app.post(path, handler) — define a POST route.

- handler(req, res) — your function receives the request and response objects.

- req.body — contains parsed JSON body for POST requests.

- res.send(data) — sends JSON or string response with HTTP 200 status.

## 🛠️ Roadmap

- Add support for other HTTP methods (PUT, DELETE, etc.)

- Middleware support for auth, logging, error handling

- Advanced routing features

- Plugin ecosystem for extensibility

## ⚙️ Status

- Beta 1 — early production-ready release with basic GET and POST support.

- API is stable for simple projects; advanced features and middleware coming soon.

- Your feedback and contributions are highly welcome!

