# Learning HAPI at Platzi

## Build basic app with Hapi

- With Typescript

- With Eslint

- With Pug

## For a demo visit:

[Demo Live App](https://hapi-demo-gus.herokuapp.com/)

#

## Environment variables

### Inital configuration

It is necesary add .env file in development and save environment variables on production.

An example of the info is at:
example.env in the root of project

```txt


PORT=3000
HOST='localhost'
DB_URL=/url/to/your/db
DB_UID=some-key-for-apply-db-rules

PROJECT_ID=needs-sdk-config-file-from-firebase
PRIVATE_KEY_ID=download-this-info-from-firebase-config
PRIVATE_KEY=download-this-info-from-firebase-config
CLIENT_EMAIL=download-this-info-from-firebase-config
CLIENT_ID=download-this-info-from-firebase-config
AUTH_URI=download-this-info-from-firebase-config
TOKEN_URI=download-this-info-from-firebase-config
AUTH_PROVIDER_X509_CERT_URL=download-this-info-from-firebase-config
CLIENT_X509_CERT_URL=download-this-info-from-firebase-config

```

That is because the config connection to firebase required the environment variables

```js
export const config: any = {
  type: 'service_account',
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
};
```

## After need to install dependencies

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
