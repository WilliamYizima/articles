import pyautogui

# Descobrindo o tamanho da tela
width, heigh = pyautogui.size()
print(f'Altura : {width}')
print(f'Largura : {heigh}')

# -----------------------------------------------------------------------------------

"""
CASO QUEIRA PARAR A EXECUÇÀO - MOVA O MOUSE PARA CIMA E ESQUERDA
movendo o mouse em um quadrado 
"""
# for i in range(10):
#     pyautogui.moveTo(x=100, y=100, duration=0.25)
#     pyautogui.moveTo(x=200, y=100, duration=0.25)
#     pyautogui.moveTo(x=200, y=200, duration=0.25)
#     pyautogui.moveTo(x=100, y=200, duration=0.25)

"""
no exemplo acima é possível ver um loop de 10 vezes com as coordenadas 
fazendo um quadrado onde a velocidade da movimentação é de 0,25 segundos
"""
# print("Acabo de finalziar a parte do quadrado com posições absolutas")

# -----------------------------------------------------------------------------------

# for i in range(10):
#     pyautogui.moveRel(100, 0, duration=0.25)
#     pyautogui.moveRel(0, 100, duration=0.25)
#     pyautogui.moveRel(-100, 0, duration=0.25)
#     pyautogui.moveRel(0, -100, duration=0.25)
"""
no exemplo acima é realizado o mesmo código, com uma única diferença:
a posição é relativa, isso é onde o mouse estiver parado ele vai começar
a fazer os movimentos em quadrado
"""

# print("Acabo de finalziar a parte do quadrado com posições relativas")

# -----------------------------------------------------------------------------------

"""
Pode ser útil obter a posição do mouse
"""
# position_mouse = pyautogui.position()
# print(position_mouse)

# -----------------------------------------------------------------------------------
