import json
from flask import Flask, jsonify, Response, request, g, url_for
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
from datetime import datetime
from typing import Callable
from werkzeug.utils import secure_filename
import  base64

DATABASE = './database.db'

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
CORS(app)

UPLOAD_FOLDER = os.path.join(basedir, 'static/images')
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'database.db')
app.config['SLQALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# initujemo database


class MySQLAlchemy(SQLAlchemy):
    Column: Callable
    String: Callable
    Integer: Callable


db = MySQLAlchemy(app)
# initujemo marshmallow
ma = Marshmallow(app)


class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    description = db.Column(db.String(200))
    tech = db.Column(db.String(100))
    git = db.Column(db.String(100))
    image = db.Column(db.String())
    live = db.Column(db.String(100))
    created = db.Column(db.String(100))
    updated = db.Column(db.String(100))

    def __init__(self, name, description, tech, git, live, image, created, updated):
        self.name = name
        self.description = description
        self.tech = tech
        self.git = git
        self.image = image
        self.live = live
        self.created = created
        self.updated = updated


class ProjectSchema(ma.Schema):
    class Meta:
        fields = ('name', 'description', 'tech', 'git',
                  'live', 'image', 'created', 'updated')


project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)


# file check
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def home():
    with open('projects.json', 'r') as j:
        return json.load(j)


@app.route('/log-in', methods=['POST'])
def log_in():
    if request.method == 'POST':
        print('stiglo')
        return Response('200')


@app.route('/get-projects', methods=['GET'])
def get_json_data():
    if request.method == 'GET':
        return jsonify(projects_schema.dump(Projects.query.all()))


@app.route('/add-project', methods=['POST'])
def add_project():
    if request.method == 'POST':
        project_name = request.form['project_name']
        description = request.form['description']
        tech = request.form['tech']
        git = request.form['git']
        live = request.form['live']
        image = request.files['project_image']
        image_name = secure_filename(project_name)
        image64 = base64.b64encode(image.read())
        print(image64)

        new_project = Projects(project_name, description,
                               tech, git, live,image64, str(datetime.now()), str(datetime.now()))
        db.session.add(new_project)
        db.session.commit()
        return Response('200')

    return Response('200')


@app.route('/delete-project')
def delete_project():
    return Response("Removed")


@app.route('/edit-project')
def edit_project():
    return Response("Edited")


@app.route('/test', methods=['POST'])
def test():
    if request.method == 'POST':
        pass

    return Response('ok')


if __name__ == "__main__":
    app.run(debug=True)
