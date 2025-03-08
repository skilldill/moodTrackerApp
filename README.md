### Запуск API для приложения

Запускать нужно в Docker

- Собираем контейнер
```sh
docker-compose build
```

- Запускаем API
```sh
docker-compose up -d
```

API запустится на ```http://localhost:4000```.

```http://localhost:4000/moods``` вернет список настроений
