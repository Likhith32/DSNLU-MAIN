const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function setupDatabase() {
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '12345678',
    });

    try {
        console.log('Connected to MySQL server.');

        // Create Database
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE || 'dsnlu'}`);
        console.log(`Database '${process.env.MYSQL_DATABASE || 'dsnlu'}' created or already exists.`);

        await connection.changeUser({ database: process.env.MYSQL_DATABASE || 'dsnlu' });

        // Create Notifications Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        link TEXT,
        date DATE,
        isNew BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
        console.log('Table "notifications" created or already exists.');

        // Create Results Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS results (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        link TEXT,
        date DATE,
        isNew BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
        console.log('Table "results" created or already exists.');

        // Create Gallery Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS gallery (
        id INT AUTO_INCREMENT PRIMARY KEY,
        url TEXT NOT NULL,
        caption VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
        console.log('Table "gallery" created or already exists.');

    } catch (error) {
        console.error('Error setting up database:', error);
    } finally {
        await connection.end();
    }
}

setupDatabase();
