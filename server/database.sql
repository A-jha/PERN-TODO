-------This file is just for reference --- 
-------how our schema will looks like ----


----Create a perntodo database ----
CREATE DATABASE perntodo;

----Create a table todo----
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
