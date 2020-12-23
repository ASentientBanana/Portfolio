import json,base64,bcrypt,os
from flask import Flask, jsonify, Response, request, g, url_for
from werkzeug.utils import secure_filename
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from datetime import datetime
from typing import Callable
from flask_cors import CORS
from dotenv import load_dotenv




DATABASE = './database.db'

load_dotenv()
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
CORS(app)


UPLOAD_FOLDER = os.path.join(basedir, 'static/images')
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'database.db')
app.config['SLQALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config.update(
    	MAIL_SERVER='smtp.gmail.com',
	    MAIL_PORT=465,
	    MAIL_USE_SSL=True,
	    MAIL_USERNAME = os.getenv('EMAILUSER'),
	    MAIL_PASSWORD = os.getenv('EMAIL_PASSWRD')
)


mail = Mail(app)
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
        # Way2Lazy4Admin
        passwd = request.form['password']
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(passwd.encode(), salt)
        if bcrypt.checkpw(passwd.encode(),os.getenv('SECRET').encode()):
            return Response('200')
    return Response('401')


@app.route('/get-projects', methods=['GET'])
def get_json_data():
    if request.method == 'GET':
        return jsonify(projects_schema.dump(Projects.query.all()))


@app.route('/send-contact-mail', methods=['POST'])
def send_mail():
        if request.method == 'POST':

            try:
                msg = Message(f"New Contact {request.form['sender_name']}",
		        sender=request.form['sender'],
		        recipients=["asentientbanana@gmail.com"])
                msg_body = 'from: ' +request.form['sender'] + '\n' + '\n'  + request.form['contact_body']  
                msg.body = msg_body          
                mail.send(msg)
                return '200'
            except:
                pass


@app.route('/add-project', methods=['POST'])
def add_project():
    if request.method == 'POST':
        project_name = request.form['project_name']
        description = request.form['description']
        tech = request.form['tech']
        git = request.form['git']
        live = request.form['live']
        image = request.files['project_image']
        # image_name = secure_filename(project_name)
        image64 = base64.b64encode(image.read())
        new_project = Projects(project_name, description,
                               tech, git, live,image64, str(datetime.now()), str(datetime.now()))
        db.session.add(new_project)
        db.session.commit()
        return Response('200')

    return Response('406')

# 

@app.route('/delete-project/<name>', methods=['DELETE'])
def delete_project(name):
    if request.method == 'DELETE':
        proj = Projects.query.filter_by(name=name).first_or_404()
        db.session.delete(proj)
        db.session.commit()
    return jsonify(projects_schema.dump(Projects.query.all()))


@app.route('/edit', methods=['POST'])
def edit_project():
    print(request.form['project_name'])
    project_name = request.form['project_name']
    project = Projects.query.filter_by(name=project_name).first()
    description = request.form['description']
    tech = request.form['tech']
    git = request.form['git']
    live = request.form['live']
    image = "request.files['project_image']"
    # image64 = base64.b64encode(image.read())
    project.name =  project_name
    project.description = description
    project.tech = tech
    project.git = git
    project.image = image
    project.created = datetime.now()
    project.updated = datetime.now()
    project.live = live
    db.session.commit()
    return jsonify(projects_schema.dump(Projects.query.all()))


@app.route('/test', methods=['POST'])
def test():
    if request.method == 'POST':
        print('*****')
        pass

    return Response('ok')


if __name__ == "__main__":
    app.run(debug=True)
