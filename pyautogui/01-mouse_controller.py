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

"""
Utilizando a funcao de click
"""
# pyautogui.click(x=500,y=500,button='right')
# print('fiz um click')

# -----------------------------------------------------------------------------------

"""
Utilizando a funcao de arrastar
use o paint para visualizar o programa arrastar
"""
# x_local_arquivo_inicial = 481
# y_local_arquivo_inicial = 354

# x_local_destino = 1064
# y_local_destino = 341

# x_distancia_relativa=x_local_destino - x_local_arquivo_inicial
# y_distancia_relativa=y_local_destino - y_local_arquivo_inicial

# pyautogui.moveTo(x=x_local_arquivo_inicial, y=y_local_arquivo_inicial)
# pyautogui.click()
# pyautogui.dragRel(x_distancia_relativa,y_distancia_relativa,duration=0.2,button="left")

# -----------------------------------------------------------------------------------

"""
use o comando abaixo para rolar a tela
deixe o mouse em cima de onde deseja roalr a tela
"""
# pyautogui.scroll(200)