from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User, RunnerProfile  # Importing db from models.py

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://nickspiess:beherenow23@localhost/nickspiess'
db.init_app(app)  # Initialize db with the Flask app

@app.route('/init_db', methods=['GET'])
def init_db():
    db.create_all()
    return jsonify({"message": "Database tables created"}), 201


@app.route('/')
def home():
    return "Hello"

@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']

    new_user = User(username=username, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully!"}), 201

# ... rest of your routes ...

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
