from flask import Flask
import time
import pyautogui
import threading
app = Flask(__name__)


def test():
    return pyautogui.position()

# @app.route('/time')
# def get_current_time():
#     return {'time': time.time()}


# player_card_one = ["Not Found", "Not Found"]
# player_card_two = ["Not Found", "Not Found"]
# card_location = (300, 505, 80, 43)
# middle = 340
# confidence_scale = .8


# suit_list = ['images/club.png', 'images/spade.png', 'images/diamond.png', 'images/heart.png', 'images/two.png',
#              'images/three.png', 'images/four.png', 'images/five.png', 'images/six.png', 'images/seven.png', 'images/eight.png', 'images/nine.png', 'images/ten.png', 'images/jack.png', 'images/queen.png', 'images/king.png', 'images/ace.png', ]


# @app.route('/hand')
# def hand_reader():
#     hand_parts = []
#     # threading.Timer(1.0, hand_reader).start()
#     for i in suit_list:
#         coordinates = pyautogui.locateAllOnScreen(
#             i, confidence=confidence_scale,  grayscale=True, region=card_location)
#         for element in coordinates:
#             if(element != None and element[0]) > middle:
#                 print(element)
#             hand_parts.append(i[7:-4])
#             if(element != None and element[0]) < middle:
#                 hand_parts.append(i[7:-4])
#     print(hand_parts)
#     hand = hand_parts[2] + " " + hand_parts[0] + \
#         " " + hand_parts[3] + " " + hand_parts[1]
#     print(hand)
#     return{'hand': hand}
# @app.route('/dealer')
# def dealer_seat():
#     # threading.Timer(5.0, dealer_seat).start()
#     for idx, val in enumerate(dealer_list):
#         im = pyautogui.screenshot()
#         button = im.getpixel(val)
#         if(button[0] > 200):
#             dealer = idx
#             print(dealer)
#     # time.sleep(10)
#     return{'dealer': dealer}
