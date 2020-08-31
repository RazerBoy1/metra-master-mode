# mfrontend_git

Flask and Vue based framework for applications

## Setting up Flask environment

First clone this project, then activate the virtual environment. 
```bash
  $ git clone https://gitlab.com/pborut/mfrontend_git/
  $ cd mfrontend_git/venv
  
  $ python -m venv .
  
  # Activate the virtual env (OS X & Linux) 
  $ source venv/bin/activate   
  
  # Activate the virtual env (Windows) 
  $ venv\Scripts\activate.bat
```

Next we need to install the requirements for this project,

```bash
$ pip install -r requirements.txt	
```
Before running, we need to set our environments,
```bash
# OS X & Linux

$ export FLASK_APP=run
$ export FLASK_ENV=development
```
```bash
# Windows

$ set FLASK_APP=run
$ set FLASK_ENV=development
```
or, if you're using Power Shell,
```bash
$ $env:FLASK_APP = "run"
$ $env:FLASK_ENV = "development"
```

Then lets install node dependencies, 
```bash
$ cd frontend/
$ npm install 
```

**If we want to write Vue code we do it in:** `frontend/src/components/`

The `dist/` in the root directory is the compiled code (*Don't write any code there*).
Then let's build the `package.json`,

```bash
$ npm run build
```
This will build the `dist/` directory in the root of our project, which is specified in `config/index.js`.

```js
index: path.resolve(__dirname, '../../dist/index.html'),
assetsRoot: path.resolve(__dirname, '../../dist'),
```
In the `dist/static/` is the compiled `css` and `js`, and `index.html` the compiled `Vue JS` template.

We've set up Flask so it knows where to get the static and template files in `__init__.py`

```python
app = Flask(__name__, 
            static_folder="../dist/static", 
            template_folder="../dist")
```

At last, 
```bash
$ flask run
```
**or in our case, since we're using SocketIO**,

```bash
$ python run.py
```
According to Flask SocketIO documentation we should run with `python run.py`, because the other method lacks WebSocket support.
You should see this output:

```bash
 * Environment: development
 * Debug mode: on
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 227-958-857
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

 Go to `127.0.0.1:5000`, and there you go!

### References 
 * [Flask Documentation](https://flask.palletsprojects.com/en/1.1.x/)

 * [Flask SocketIO Documentation](https://flask-socketio.readthedocs.io/en/latest/)
 * [Flask & Vue JS integration article](https://codeburst.io/full-stack-single-page-application-with-vue-js-and-flask-b1e036315532)
 * [Vue JS Documentation](https://vuejs.org/v2/guide/)
 * [Bulma documentation](https://bulma.io/documentation/)

---

## M2 Setup controller

