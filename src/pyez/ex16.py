# -*- coding: utf-8 -*-
from sys import argv

script, filename = argv

raw_input("erase or not? (Ctrl-C)")

print "Opening the file ..."
target = open(filename, 'w')

print "Truncating the file. Goodbye!"
target.truncate()

print "enter three lines"

line1 = raw_input("line 1:")
line2 = raw_input("line 2:")
line3 = raw_input("line 3:")

print "going to write these to the file."

target.write(line1)
target.write('\n')
target.write(line2)
target.write('\n')
target.write(line3)
target.write('\n')

print "Finally..."
target.close()
