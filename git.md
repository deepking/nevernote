# Git

把某個 Folder 當作一個 Repository(Repo)，裡面有個 .git/ 用來記錄這個 
Repo 的檔案被修改的歷史記錄，經由 Commit 將目前的狀態跟 .git/ 記錄比較，
產生 Diff（與上一次存檔的差異），並且存入 .git/ 。

透過 Clone 複製一份現有的 Repo Foo 到另一個 Repo Bar，同時在兩個 Repo 
修改檔案，透過 Merge 同步兩個 Repo 的檔案。

Git 允許多個 Repo 存在，各個 Repo 同時被修改再 Merge 同步資料。

Github 是存放一份 Repo 在 Server，每個 Github User Fork 一份 Repo，
修改之後在跟原本的 Repo 同步。

# Resource
- [the simple guide](http://rogerdudler.github.io/git-guide/)

# Create Repo
新增且進入目錄，執行
```
$ git init
```

Example
```
$ mkdir foo
$ cd foo
$ git init
$ ls -a
.  ..  .git
```
ls 可以看到 .git/ 目錄被建立

# 設定
修改之後被記錄在 .git/config , 可以直接修改 .git/config 刪掉不要的
config

## User & Email
每個 Comiit 會記錄作者 Name 跟 E-Mail, 可以透過以下 Command 修改
```
$ git config user.name YourName
$ git config user.email Your@Email
```
## highlight
use colorful git output
```
$ git config color.ui true
```
show log on just one line per commit
```
$ git config format.pretty oneline
```

# Add & Commit

![Workflow](http://rogerdudler.github.io/git-guide/img/trees.png)
[圖片來源](http://rogerdudler.github.io/git-guide/)

新增一個檔案 a.txt, 看目前狀態
```
$ touch a.txt
$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	a.txt

nothing added to commit but untracked files present (use "git add" to track)
```
Untracked files 表示不在 Commit 範圍內，並不會被 Commit。

透過 add 加到 stage，stage 表示在 commit 範圍的 file 更動
```
$ git add a.txt
$ git status 
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   a.txt
```

commit 記錄
```
$ git commit -m "init"
[master (root-commit) 41e0e9f] init
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 a.txt

$ git log
41e0e9f0214933600cedd351fbb7d3a49eab3fde init
```
41e0e9 是這個 commit 的 unique id


修改 a.txt 再 commit 

a.txt:
```
line 1
line 2
```
add & commit
```
$ git add a.txt
$ git commit -m "update a.txt"
$ git log
b2a1931a190d38dc1051226418f073141b9d588d update a.txt
41e0e9f0214933600cedd351fbb7d3a49eab3fde init
```
這時有兩個記錄，41e0e, b2a19

# Diff
看這兩個 commit 的 diff(差異), + 是新增, -是減少
```
$ git diff 41e0e b2a19
diff --git a/a.txt b/a.txt
index e69de29..7bba8c8 100644
--- a/a.txt
+++ b/a.txt
@@ -0,0 +1,2 @@
+line 1
+line 2

$ git diff b2a19 41e0e
diff --git a/a.txt b/a.txt
index 7bba8c8..e69de29 100644
--- a/a.txt
+++ b/a.txt
@@ -1,2 +0,0 @@
-line 1
-line 2
```


