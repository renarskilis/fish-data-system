-- Connect to PostgreSQL
\c postgres

-- Create the fish_data database
CREATE DATABASE fish_data;

-- Create the fish_data_user with a password
CREATE USER fish_data_user WITH ENCRYPTED PASSWORD 'fishdatauser';

-- Grant all privileges on the fish_data database to fish_data_user
GRANT ALL PRIVILEGES ON DATABASE fish_data TO fish_data_user;