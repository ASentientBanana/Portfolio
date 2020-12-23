import json
import base64


def write_to_json(data, file_name="projects.json"):
    with open('projects.json', 'r') as j:
        json_data = json.load(j)
        data['id'] = len(json_data['projects'])
        json_data['projects'].append(data)

    with open('projects.json', 'w') as s:
        json.dump(json_data, s)


def save_image(image_name, img_data):
    with open("imageToSave.png", "wb") as fh:
        fh.write(base64.decodebytes(img_data))
