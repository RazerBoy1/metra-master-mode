from flask import Flask, render_template, request, current_app
from flask_socketio import SocketIO, emit, join_room, leave_room, send
import json

app = Flask(__name__, static_folder='./dist/static', template_folder='./dist')
app.config['SECRET_KEY'] = '123superDuperUnbreakableMegaUltraEdge+Secret456!'
socketio = SocketIO(app, cors_allowed_origins='*', logger=True, engineio_logger=True)

@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('connect')
def handle_connect():
    print('A client connected')


@socketio.on('disconnect')
def handle_disconnect():
    print('A client disconnected')


@socketio.on('SEND_OPEN_LOCKERS')
def send_open_doors(lockers):
    for locker in lockers['lockersToUnlock']:
        emit('OPENED_LOCKER', locker)
        socketio.sleep(1)


@socketio.on('SEND_OPEN_ALL_LOCKERS')
def send_open_all_locker():
    socketio.sleep(2)
    emit('OPENED_ALL_LOCKERS')


@socketio.on('SEND_OPEN_ALL_LOCKERS_ON_LOCATION')
def send_open_all_locker_on_location():
    socketio.sleep(2)
    emit('OPENED_ALL_LOCKERS_ON_LOCATION')


@socketio.on('SEND_SETTINGS_VALUE')
def send_settings(settings):
    print(settings)


@socketio.on('SEND_SLIDER_VALUE')
def send_slider(slider):
    print(slider)


@socketio.on('GET_SETTINGS_DATA')
def get_settings_data():
    with open('settingsData.txt') as json_file:
        settingsData = json.load(json_file)

        emit('SETTINGS_DATA', settingsData)


@socketio.on('SET_SETTINGS_DATA')
def set_settings_data(data):
    with open('settingsData.txt', 'w') as out_file:
        json.dump(data, out_file)


@socketio.on('SEND_TIMEOUT')
def send_timeout():
    print('User was logged out of master mode, because of inactivity')

if __name__ == '__main__':
    socketio.run(app, debug=True)
