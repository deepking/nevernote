# -*- coding: utf-8 -*-
from sys import argv

script, filename = argv

text = open(filename)
print text.read()
text.close()

filename2 = raw_input("> ")

text2 = open(filename2)
print text2.read()
text2.close()
