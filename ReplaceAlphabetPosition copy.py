def alphabet_position(text):
    result = ""

    for i in text:

        if ord(text[i].lower()) > 96 and ord(text[i].lower() < 123):
                result += (ord(text[i].lower()) - 96) + " "

    print(alphabet_position("this is A TSJHGOIASDwekgj string"))

    