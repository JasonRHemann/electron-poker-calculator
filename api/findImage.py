import pyautogui


def locate_image():

    print(pyautogui.locateOnScreen('images/spade.png', grayscale=False))


locate_image()
