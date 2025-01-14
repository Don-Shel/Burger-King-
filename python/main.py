import sqlite3
from flask import Flask, request, render_template

app = Flask(__name__)

# Create a database connection
conn = sqlite3.connect('blog.db')
c = conn.cursor()

# Create table for users
c.execute("""CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
            )""")

# Create table for comments
c.execute("""CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY,
            user_id INTEGER NOT NULL,
            comment TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id)
            )""")

conn.commit()
conn.close()