create TABLE category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

create TABLE zametky(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    time INTEGER,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category (id)
);