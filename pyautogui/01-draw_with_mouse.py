import pyautogui


pyautogui.click()
distance = 200
while distance > 0:
    pyautogui.dragRel(distance, 0, duration=0.2,button="left")
    distance = distance - 5
    pyautogui.dragRel(0, distance, duration=0.2,button="left")
    pyautogui.dragRel(-distance, 0, duration=0.2,button="left")
    distance = distance - 5
    pyautogui.dragRel(0, -distance, duration=0.2,button="left")