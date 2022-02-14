FROM postgres

ENV POSTGRES_PASSWORD postgresadmin
ENV POSTGRES_DB test_database

COPY database.sql /docker-entrypoint-initdb.d/