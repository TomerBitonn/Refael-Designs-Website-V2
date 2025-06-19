from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

limiter = Limiter(get_remote_address, app=app)

FORMSPREE_URL = os.getenv("FORMSPREE_URL")
ALLOWED_ORIGIN = "https://refael-d.co.il"  

@app.route('/submit-form', methods=['POST', 'OPTIONS'])
@limiter.limit("5 per minute") 
def submit_form():
    if request.method == "OPTIONS":
        return jsonify({"message": "CORS preflight successful"}), 200

    origin = request.headers.get("Origin") or request.headers.get("Referer")
    if not origin or not origin.startswith(ALLOWED_ORIGIN):
        return jsonify({"error": "Access denied"}), 403

    data = request.json
    if not data:
        return jsonify({"error": "No data received"}), 400

    try:
        response = requests.post(FORMSPREE_URL, json=data, headers={"Content-Type": "application/json"})
        return jsonify(response.json()), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/gallery')
def gallery():
    return render_template('gallery.html')


@app.route('/terms')
def terms():
    return render_template('terms.html')
