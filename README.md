## Postgres rest api

### start and initialize the database

- run `docker-compose up -d`, if docker is not installed you have to install this first at <a href="https://www.docker.com/products/docker-desktop">this</a> link if you are on mac or windows. If you are on linux you have to install it via your package manager.
- migrate the database using `npx prisma migrate dev --name init`
- start the server via `npm run dev` if you are in development or `npm start` if you are in production. Now you're ready to go.
