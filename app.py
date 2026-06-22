from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/cats")
def cats():
    return render_template("cats.html")
@app.route("/quiz")
def quiz():
    return render_template("quiz.html")
@app.route("/result")
def result():
    return render_template("result.html")
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
