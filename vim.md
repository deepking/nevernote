# VIM

Most of the information below (along with more beginner info) can be found in 
```
:help help-summary
```

Vim's help is accessible through the built-in command **:help** (and can be searched with **:helpgrep**).

Tab completion with the right prefixes makes it pretty quick to find what you're looking for 
if you already know something about the command:

- : is used for cmdline/Ex-mode commands 
    ```
    :help :help
    ```
- ' is used for options 
    ```
    :help 'incsearch'
    ```
- No prefix for normal mode commands 
    ```
    :help CTRL-]
    ```
- i for insert mode 
    ```
    :help i_CTRL-[
    ```
- v for visual mode 
    ```
    :help v_CTRL-]
    ```


vib

# concept
- http://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118

# cheat sheet
- http://www.fprintf.net/vimCheatSheet.html
- http://tnerual.eriogerg.free.fr/vimqrc.html

# vimscript

## plugin

### color
```
:color mycolors
```
correspond to
```
~/.vim/color/mycolors.vim
```
   
### plugin
Files inside ~/.vim/plugin will each be run once every time Vim starts.

### ftdetect

## echo
Persistent Echoing
```
:echom
```
view the echo message
```
:messages
```


## option
turn the boolean option on
```
:set [ name ]
:set number
```
turn the boolean option off
```
:set no[ name ]
:set nonumber
```
toggling boolean option
```
set number!
```
checking, return the option value
```
set number?
```

## mapping
- map [key] [command]
- map <special key> [command]
```
:map \ dd
:map <c-d> dd
```

delete the current line in insert mode
```
:imap <c-d> <esc>ddi
```

convert the current word to uppercase
```
:imap <c-u> <esc>gUiw`]a
```


# reference
- http://www.reddit.com/r/vim/comments/2eb82s/how_to_find_vimdoc_help/
- http://stackoverflow.com/tags/vim/info
- http://learnvimscriptthehardway.stevelosh.com/
