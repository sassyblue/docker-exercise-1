from flask import Flask, render_template, request, url_for, jsonify, Response
from flask_cors import CORS
from pymongo import MongoClient
import uuid

#Mongo Settings
client = MongoClient('mongodb', 27017)
db = client.test_database
collection = db.test_collection
tasks_list = db.tasks_list

# Initialize the Flask application
app = Flask(__name__)
CORS(app)

def get_all():
  res = []
  for elem in tasks_list.find():
    res.append({
      "id": elem['id'],
      "label": elem['label'],
      "done": elem['done']
    })
  return res

@app.route('/list', methods=['get'])
def get_task_list():
  return jsonify(get_all())

@app.route('/delete', methods=['POST'])
def delete_task():
  req_data = request.get_json()
  delete_task_id=req_data['id']
  tasks_list.delete_one({ "id": delete_task_id })
  return jsonify({ "id": delete_task_id })

@app.route('/toggle', methods=['POST'])
def check_task():
  req_data = request.get_json()
  task_id=req_data['id']
  
  is_done = tasks_list.find_one({ "id": task_id })['done']

  tasks_list.update_one({ "id": task_id }, { 
    "$set": { "done": not is_done } 
  })
  
  return jsonify({ "id": task_id })

@app.route('/add', methods=['POST'])
def add_task():
    req_data = request.get_json()
    task_id = str(uuid.uuid4())[:8]
    task_name=req_data['label']
    is_done=req_data['done'] # true/false
    
    tasks_list.insert_one({
      "id": task_id,
      "label": task_name,
      "done": is_done, 
    })

    response = jsonify({
      "id": task_id,
      "label": task_name,
      "done": is_done, 
    })
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response # return elem to front

if __name__ == '__main__':
  app.run( 
        host="0.0.0.0",
        port=int("5000"),
        debug=True,
  )