def buscar_valor(lista_numeros, valor_objetivo):
    for i, numero in enumerate(lista_numeros):
        if numero == valor_objetivo:
            return print(i)
    return print(-1)


lista_de_numeros = [1, 45, 23, 76, 23, 4, 12, 45, 23]
buscar_valor(lista_de_numeros, 23)
