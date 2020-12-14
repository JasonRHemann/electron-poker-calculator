import pyautogui


def locate_image():

    pic = pyautogui.screenshot('screenshot.png')
    coords = pyautogui.locateAllOnScreen(
        'screenshot.png')
    print(coords)
    print(pic)
    return coords


locate_image()
