from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Initialize the SQLAlchemy object to handle database operations
db = SQLAlchemy()

def create_app():
        app = Flask(__name__)
            app.config.from_object('config.Config')

                # Initialize the database with the app
                    db.init_app(app)

                        # Register the routes
                            from .routes import main_bp
                                app.register_blueprint(main_bp)

                                    return app

