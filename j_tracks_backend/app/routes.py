from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from .models import db, User

# Create a blueprint for the main routes
main_bp = Blueprint('main', __name__)

# Route for user registration
@main_bp.route('/register', methods=['POST'])
def register_user():
        data = request.get_json()
            username = data.get('username')
                password = data.get('password')

                    if not username or not password:
                                return jsonify({'error': 'Missing username or password'}), 400

                                # Hash the password before saving
                                    password_hash = generate_password_hash(password)
                                        new_user = User(username=username, password_hash=password_hash)

                                            try:
                                                        db.session.add(new_user)
                                                                db.session.commit()
                                                                        return jsonify({'message': 'User registered successfully'}), 201
                                                                        except:
                                                                                    return jsonify({'error': 'User registration failed'}), 500

                                                                                # Route for user login
                                                                                @main_bp.route('/login', methods=['POST'])
                                                                                def login_user():
                                                                                        data = request.get_json()
                                                                                            username = data.get('username')
                                                                                                password = data.get('password')

                                                                                                    user = User.query.filter_by(username=username).first()

                                                                                                        if user and check_password_hash(user.password_hash, password):
                                                                                                                    return jsonify({'message': 'Login successful'}), 200
                                                                                                                    else:
                                                                                                                                return jsonify({'error': 'Invalid username or password'}), 401

