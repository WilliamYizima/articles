# PyAutoGui

## About
Pyautogui é uma lib que auxilia no controle de mouse e teclado.
Utiliza a automacão pela GUI(Graphical User Interface).

## Steps

1 - É preferível a instalação de um ambiente virtual
```
#com o virtualenv instalado no seu pc (usando o linux/MAC)
virtualenv .venv;source \
.venv/bin/activate
```
2 - Instalando o pyautogui
```
#linux
sudo pip3 install python3-xlib
sudo apt-get install scrot
sudo apt-get install python3-tk
sudo apt-get install python3-dev
pip3 install pyautogui

#MAC
sudo pip3 install pyobjc-framework-Quartz
sudo pip3 install pyobjc-core
sudo pip3 install pyobjc
pip3 install pyautogui
#ao tentar fazer a primeira execução, o MAC pedirá que vc libere o recurso para controlar o mouse e teclado
```

## Examples
01- Controlando o Mouse
- O mouse é controlado por coordenadas, dessa forma o canto superior esquerdo é a coordenada (0,0)
- Para mover para direita, a coordenada aumenta em X
- para mover para baixo, a coordenada aumenta em y

Obs:
- caso a automação ocorra de forma inesperada, somente faça logout no seu user atual e o programa irá parar
- Existe uma opção de "FailSave" no Pyautogui que ajuda a pausar ou parar a execução movento o mouse para cima e esquerda