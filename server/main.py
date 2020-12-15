import json
import random
from flask import Flask, jsonify, Response, request
from models.Project import Project
from util import write_to_json
import uuid
import sqlite3

app = Flask(__name__)

DATABASE = './database.db'


@app.route('/')
def home():
    with open('projects.json', 'r') as j:
        return json.load(j)


@app.route('/get-projects')
def get_json_data():
    with open('projects.json', 'r') as j:
        return json.load(j)


@app.route('/add-project', methods=['POST'])
def add_project():
    project = json.loads(request.data)
    if request.method != 'POST':
        return Response("not a post")
    write_to_json(Project(project['projectName'], project['description'],
                          project['tech'], project['git'], project['live'], project['image']).getData())
    return Response("dvesta")


@app.route('/delete-project')
def delete_project():
    return Response("Removed")


@app.route('/edit-project')
def edit_project():
    return Response("Edited")


@app.route('/test', methods=['POST'])
def test():
    if request.method == 'GET':
        print('-----------------')
        print('got')
        print('-----------------')
    if request.method == 'POST':
        print('-----------------')

    return Response("test")


if __name__ == "__main__":
    app.run(debug=True)
