import time
import threading
import pyautogui

card_number_list = ["images/A.png", "images/K.png", "images/Q.png",
                    "images/J.png", "images/10.png", "images/9.png",
                    "images/8.png", "images/7.png", "images/6.png",
                    "images/5.png", "images/4.png", "images/3.png",
                    "images/2.png"]


def locate_image():

    card_number = []
    # threading.Timer(5.0, locate_image).start()
    for i in card_number_list:
        coordinates = pyautogui.locateAllOnScreen(
            i, confidence=0.9,  grayscale=True)
        print(i)
        for element in coordinates:
            if element is not None:
                print(element)
                card_number.append(i[7:-4])

    print(card_number)

    return card_number


locate_image()
