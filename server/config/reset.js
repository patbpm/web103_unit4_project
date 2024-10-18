import { pool } from "./database.js";
import { cars } from "../data/cars.js";
import { exteriors } from "../data/exteriors.js";
import { interiors } from "../data/interiors.js";
import { roofs } from "../data/roofs.js";
import { wheels } from "../data/wheels.js";

// Helper function to handle query execution
const executeQuery = async (query, values = []) => {
  try {
    await pool.query(query, values);
  } catch (err) {
    console.error(`Failed to execute query: ${err.message}`);
    throw err; // propagate the error for further handling
  }
};

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connected successfully:', res.rows[0]);
  }
});

// Create tables
const createCarsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS cars;
    CREATE TABLE IF NOT EXISTS cars (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      isconvertible BOOLEAN NOT NULL,
      exterior INTEGER NOT NULL,
      roof INTEGER NOT NULL,
      wheels INTEGER NOT NULL,
      interior INTEGER NOT NULL,
      price REAL NOT NULL
    );
  `;
  await executeQuery(query);
  console.log("Cars table created successfully");
};

const createExteriorsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS exteriors;
    CREATE TABLE IF NOT EXISTS exteriors (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price REAL NOT NULL
    );
  `;
  await executeQuery(query);
  console.log("Exteriors table created successfully");
};

const createInteriorsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS interiors;
    CREATE TABLE IF NOT EXISTS interiors (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price REAL NOT NULL,
      iscombo BOOLEAN
    );
  `;
  await executeQuery(query);
  console.log("Interiors table created successfully");
};

const createRoofsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS roofs;
    CREATE TABLE IF NOT EXISTS roofs (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price REAL NOT NULL,
      isconvertible BOOLEAN NOT NULL
    );
  `;
  await executeQuery(query);
  console.log("Roofs table created successfully");
};

const createWheelsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS wheels;
    CREATE TABLE IF NOT EXISTS wheels (
      id SERIAL PRIMARY KEY,
      color VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      price REAL NOT NULL
    );
  `;
  await executeQuery(query);
  console.log("Wheels table created successfully");
};

// Seed data
const seedCarsTable = async () => {
  const query = `INSERT INTO cars(name, isconvertible, exterior, roof, wheels, interior, price) VALUES ($1, $2, $3, $4, $5, $6, $7);`;

  for (const car of cars) {
    const values = [car.name, car.isconvertible, car.exterior, car.roof, car.wheels, car.interior, car.price];
    await executeQuery(query, values);
    console.log(`${car.name} inserted successfully`);
  }
};

const seedExteriorsTable = async () => {
  const query = `INSERT INTO exteriors(color, image, price) VALUES ($1, $2, $3);`;

  for (const exterior of exteriors) {
    const values = [exterior.color, exterior.image, exterior.price];
    await executeQuery(query, values);
    console.log(`${exterior.color} inserted successfully`);
  }
};

const seedInteriorsTable = async () => {
  const query = `INSERT INTO interiors(color, image, price, iscombo) VALUES ($1, $2, $3, $4);`;

  for (const interior of interiors) {
    const values = [interior.color, interior.image, interior.price, interior.iscombo];
    await executeQuery(query, values);
    console.log(`${interior.color} inserted successfully`);
  }
};

const seedRoofsTable = async () => {
  const query = `INSERT INTO roofs(color, image, price, isconvertible) VALUES ($1, $2, $3, $4);`;

  for (const roof of roofs) {
    const values = [roof.color, roof.image, roof.price, roof.isconvertible];
    await executeQuery(query, values);
    console.log(`${roof.color} inserted successfully`);
  }
};

const seedWheelsTable = async () => {
  const query = `INSERT INTO wheels(color, image, price) VALUES ($1, $2, $3);`;

  for (const wheel of wheels) {
    const values = [wheel.color, wheel.image, wheel.price];
    await executeQuery(query, values);
    console.log(`${wheel.color} inserted successfully`);
  }
};

// Function to create all tables
const createAllTables = async () => {
  try {
    await createCarsTable();
    await createExteriorsTable();
    await createInteriorsTable();
    await createRoofsTable();
    await createWheelsTable();
  } catch (err) {
    console.error(`Failed to create tables: ${err.message}`);
  }
};

// Function to seed all data
const seedAllData = async () => {
  try {
    await seedCarsTable();
    await seedExteriorsTable();
    await seedInteriorsTable();
    await seedRoofsTable();
    await seedWheelsTable();
  } catch (err) {
    console.error(`Failed to seed data: ${err.message}`);
  }
};

// Create tables and seed data
(async () => {
  await createAllTables();
  await seedAllData();
})();
