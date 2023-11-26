### Books-Gram with Node js/Express
This project was generated using express generator.
This project is deployed on [render](https://books-gram-api.onrender.com/) 
```
# install express generator
npm install express-generator -g

# create your folder and specify the template engine
express books-gram-api --view=ejs --git

cd books-gram-api
npm install

# run in dev mode with nodemon monitoring file changes
DEBUG=books-gram-api:* npm run dev

# or run in prod mode
DEBUG=books-gram-api:* npm start
```
### Setup project
```
git clone git@github.com:francisdeh/books-gram-api.git

cd books-gram-api

copy .example.env .env
```
### Install dependencies
```
npm install
```

### Create database
Go to elephant sql db online and create an account.
Replace the `.env` with the correct db url.

### Run the project
```
# run in dev mode with nodemon monitoring file changes
DEBUG=books-gram-api:* npm run dev

# or run in prod mode
DEBUG=books-gram-api:* npm start
# or simply
npm start

```