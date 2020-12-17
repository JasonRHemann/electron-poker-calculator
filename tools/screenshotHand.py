import time
import pyautogui

im = pyautogui.screenshot(
    str(int(time.time())) + '4.png', region=(430, 700, 30, 25))
