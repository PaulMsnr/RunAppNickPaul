from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

# Initialize the database object here
db = SQLAlchemy()

# User model for authentication
class User(db.Model):
    __tablename__ = 'users'  # Note the table name here
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.set_password(password)

# RunnerProfile model
class RunnerProfile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    sex = db.Column(db.String(10))
    height = db.Column(db.Float)
    weight = db.Column(db.Float)
    injury_history = db.Column(db.Text)
    goal_distance = db.Column(db.Float)
    race_date = db.Column(db.Date)
    race_name = db.Column(db.String(50))
    course_profile = db.Column(db.Text)
    climate = db.Column(db.String(50))
    altitude = db.Column(db.Float)
    psychological_profile = db.Column(db.Text)
    health_info = db.Column(db.Text)
    goal_pace = db.Column(db.Float)
    billing_info = db.Column(db.Text)

    def __init__(self, **kwargs):
        super(RunnerProfile, self).__init__(**kwargs)
