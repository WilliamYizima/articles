import pyautogui

try:
    print("Pressione ctrl+c para parar")

    while True:
        x, y = pyautogui.position()
        positionStr = f'X: {str(x)} - Y:{str(y)}'
        # end= '' faz a quebra de linha
        print(f'{positionStr}', end='')
        # flush=True e end=''faz o efeito de substituição rapidamente do print
        print('\b' * len(positionStr), end='', flush=True)

except:
    print("\n Acabou")