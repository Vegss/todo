CREATE DATABASE todo;

CREATE TABLE tasks (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    content VARCHAR(500) NOT NULL,
    time TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO tasks (content) VALUES ('Buy milk');
INSERT INTO tasks (content) VALUES ('Buy eggs');
INSERT INTO tasks (content) VALUES ('Buy bread');


