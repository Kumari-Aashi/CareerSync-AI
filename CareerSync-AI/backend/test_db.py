from config import DB_CONFIG
import mysql.connector

try:
    conn = mysql.connector.connect(**DB_CONFIG)
    print("Database connected successfully!")
    conn.close()
except Exception as exc:
    print("Database connection failed:", exc)
