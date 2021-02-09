# Learning HAPI at Platzi

## Build basic app with Hapi

-With Typescript

-With eslint

-With pug

## For a demo visit:

#

### Inital configuration

It is necesary add .env file in development and save environment variables on production.

An example of the info is at:

```txt
example.env   //root project

PORT=3000
HOST='localhost'
DB_URL=/url/to/your/db
DB_UID=some-key-for-apply-db-rules

```

likewise a configuration file is needed inside config folder

```txt

config/connection.json // at root level

```

```json
{
  "type": "service_account",
  "project_id": "needs sdk config file from firebase",
  "private_key_id": "download this info from firebase config",
  "private_key": "download this info from firebase config",
  "client_email": "download this info from firebase config",
  "client_id": "download this info from firebase config",
  "auth_uri": "download this info from firebase config",
  "token_uri": "download this info from firebase config"
}
```

#

Build node_modules

```
npm install

or

yarn
```

Run app on dev mode

```
npm run dev

or

yarn dev
```

Init server

```
npm start

or

yarn start
```
