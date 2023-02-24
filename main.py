from flask import Flask, request

app = Flask(__name__)

@app.route('/my-flask-route', methods=['POST'])
def handle_form_submission():
    data = request.form.get('data')
    # do something with the submitted data
    return 'Form submitted successfully!'
