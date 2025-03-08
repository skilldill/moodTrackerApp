### Пример простого API на Express

#### Запуск

Установить пакеты
```bash
npm install
```

Запустить api
```bash
npm run start
```

#### Описание используемых пакетов

- express - веб-фреймворк для быстрого создания API
```js
import express from "express";

const api = express();
```

- @babel/node и @babel/preset-env - для добавления ES-синтаксиса в проект
```js
// JavaScript syntax 
const express = require("express");

// ES syntax
import express from "express";
```
- cors - пакет необходимый для разрешения кросс-доменных запросов
```js
import express from "express";
import cors from "cors";

const api = express();
api.use(cors()); // Use cors midlleware for resolve CORS between client and API
```
- dotenv - для работы с переменными окружения
```js
import dotenv from "dotenv";

dotenv.config();

// Read APP_NAME env from .env
const APP_NAME = process.env.APP_NAME;
```
- uuid - для получения рандомных hash-значений
```js
import { v4 as uuid } from "uuid";

const user = {
  id: uuid(), // random unique value
  name: "Harry",
};
```

