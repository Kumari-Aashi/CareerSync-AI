from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.get("/")
def home():
    return "CareerSync AI Backend is Running!"

@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "CareerSync AI API"})

@app.get("/api/jobs")
def jobs():
    return jsonify([
        {"title":"Machine Learning Intern","company":"Career Labs","match":87},
        {"title":"Python Developer","company":"TechNova","match":94},
        {"title":"Data Analyst Intern","company":"DataWorks","match":82}
    ])

if __name__ == "__main__":
    app.run(debug=True, port=5000)
