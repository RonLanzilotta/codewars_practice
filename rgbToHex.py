# def rgb(r, g, b):
#     return print(toHex(r) + toHex(g) + toHex(b))

# def toHex(c):
#     if (c <= 0): return "00"
#     if (c >= 255): return "FF"
#     result = hex(c).replace('0x', '').upper()
#     if (len(result) == 1):
#         result = "0" + result
#         print(result)

# rgb(1, 2, 3)

def round(x):
    round1 = lambda x: min(255, max(x, 0))
    return print(("{:04x}" * 3).format(round1(x)))

round(45)