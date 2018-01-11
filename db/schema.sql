CREATE DATABASE iAmAllergic_db;
USE iAmAllergic_db;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_Height INT NOT NULL,
    user_Weight INT NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    allergy1 BIT NOT NULL,
    allergy2 BIT NOT NULL,
    allergy3 BIT NOT NULL,
    allergy4 BIT NOT NULL,
    allergy5 BIT NOT NULL,
    allergy6 BIT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE userNutritionalValue(
    id INT NOT NULL AUTO_INCREMENT,
    carbohydrates INT NOT NULL,
    sodium INT NOT NULL,
    potassium INT NOT NULL,
    sugars INT NOT NULL,
    fat INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(id)
);

CREATE TABLE foodNutritionalValue(
    id INT NOT NULL AUTO_INCREMENT,
    food_name VARCHAR(255), NOT NULL,
    carbohydrates INT NOT NULL,
    sodium INT NOT NULL,
    potassium INT NOT NULL,
    sugars INT NOT NULL,
    fat INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE userFoods(
    id INT NOT NULL AUTO_increment,
    FOREIGN KEY (foodID) REFERENCES foodNutritionalValue(id)
    FOREIGN KEY (userID) REFERENCES users(id)
);

