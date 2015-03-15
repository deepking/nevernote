# Github pages
https://pages.github.com/

以下 deepking 修改成自己的帳號

## 1. create repo

名稱必須是: 帳號.github.io, ex: deepking.github.io

## 2. clone repo
```
$ git clone https://github.com/deepking/deepking.github.io
```
## 3. create index.html
進入 repo
```
$ cd deepking.github.io
```
新增 index.html
```html
<!DOCTYPE html>
<html>
    <meta charset="utf-8"> 
    <head>
        <title>gnikpeed nil</Title>
        <script>
            console.log("Hello World");
        </script>
    </head>
    <body>
        <h1>一隻魯蛇易折斷,十隻魯蛇折不斷</h1>
        <p>o~~xia jie li jie</p>
    </body>
</html>
```
## 4. commit & push
```
$ git add index.html
$ git commit -m "init"
$ git push origin master
```
## 5. open http://deepking.github.io

