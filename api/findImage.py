from flask import Flask
import time
import threading
import pyautogui
app = Flask(__name__)


card_number_list = ["images/A.png", "images/K.png", "images/Q.png",
                    "images/J.png", "images/T.png", "images/9.png",
                    "images/8.png", "images/7.png", "images/6.png",
                    "images/5.png", "images/4.png", "images/3.png",
                    "images/2.png"]


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/hole1')
def locate_image():
    for i in card_number_list:
        coordinates = pyautogui.locateOnScreen(
            i, confidence=0.9,  grayscale=True, region=(430, 700, 30, 25))

        if coordinates is not None:
            hole1 = (i[7:-4])
            print(hole1)
            return {"hole card one": hole1}


# locate_image()
