#Diseña un algoritmo en el que se ingrese 2 digitos para restarlos y el programa los contabilice y 
# los acumule usando el while.
i=0
acum=0
while (i<2):
    num= int(input('ingrese el numero:'))
    num1=num
    acum= acum + num
    resta = num1-num
    i =i +1
print ('la resta de los numeros es: '+ str(resta))
print('valor del acumulador:'+ str(acum))
    
    
    