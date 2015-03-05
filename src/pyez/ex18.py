# -*- coding: utf-8 -*-

def print_more(*args):
    a1, a2, a3 = args
    print a1, a2, a3

def print_two(a1, a2):
    print a1, a2

def print_one(a):
    print a

def print_none():
    print "none"

print_more(1, 1, 1)
print_two(2, 2)
print_one(3)
print_none()
    
