# -*- coding: utf-8 -*-
from sys import argv
from os.path import exists

script, from_file, to_file = argv

print "copy", from_file, "to", to_file

in_file = open(from_file)
data = in_file.read()

print "file size", len(data)

out_file = open(to_file, 'w')
print "output file exist? %r" % to_file
print "RET to continue, CTRL-C to abort."
raw_input()

out_file.write(data)

print "Alright, all done."
out_file.close()
in_file.close()
