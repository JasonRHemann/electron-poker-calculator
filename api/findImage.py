import time
import pyautogui


def locate_image():
    print(pyautogui.locateOnScreen(
        'A.png', grayscale=True, confidence=0.9))


locate_image()
