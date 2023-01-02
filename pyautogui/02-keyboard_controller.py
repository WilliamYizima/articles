import pyautogui

"""
escrevendo em um bloco de notas
"""

pyautogui.click()
pyautogui.typewrite("Oi tudo bem?",interval=0.25)

# -----------------------------------------------------------------------------------
"""
utilizando funcoes especiais:
    enter
    return
    esc
    shiftleft
    ctrlleft
    tab
    backspace
    delete
    home
    end
    pageup
    up
    down
    left
    right
    printscreen
    command
    option
"""
pyautogui.typewrite(['a','left','enter','right','a','a'],interval=0.25)

# -----------------------------------------------------------------------------------
"""
press key
"""
# pyautogui.keyDown('shift')
# pyautogui.press('left')
# pyautogui.keyUp('shift')

# -----------------------------------------------------------------------------------
"""
press key multiple
"""
pyautogui.hotkey('shift','command','left')

# -----------------------------------------------------------------------------------

