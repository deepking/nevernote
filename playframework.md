- http://localhost:9000/@documentation

- http://brikis98.blogspot.tw/2014/03/the-ultimate-guide-to-getting-started.html

CSRF
- http://stackoverflow.com/questions/13189095/play-framework2-remove-trailing-slash-from-urls
- http://en.wikipedia.org/wiki/Cross-site_request_forgery
- https://github.com/playframework/playframework/issues/2063
- http://cyrilwang.pixnet.net/blog/post/31813568-%5B%E6%8A%80%E8%A1%93%E5%88%86%E4%BA%AB%5D-cross-site-request-forgery-%28part-1%29
- http://cyrilwang.pixnet.net/blog/post/31813672-%5B%E6%8A%80%E8%A1%93%E5%88%86%E4%BA%AB%5D-cross-site-request-forgery-%28part-2%29

# Application Layout
[Anatomy](http://localhost:9000/@documentation/Anatomy)
```
app                      → Application sources
 └ assets                → Compiled asset sources
    └ stylesheets        → Typically LESS CSS sources
    └ javascripts        → Typically CoffeeScript sources
 └ controllers           → Application controllers
 └ models                → Application business layer
 └ views                 → Templates
build.sbt                → Application build script
conf                     → Configurations files and other non-compiled resources (on classpath)
 └ application.conf      → Main configuration file
 └ routes                → Routes definition
 └ evolutions/db/1.sql   → Evolutions scripts
public                   → Public assets
 └ stylesheets           → CSS files
 └ javascripts           → Javascript files
 └ images                → Image files
project                  → sbt configuration files
 └ build.properties      → Marker for sbt project
 └ plugins.sbt           → sbt plugins including the declaration for Play itself
lib                      → Unmanaged libraries dependencies
logs                     → Standard logs folder
 └ application.log       → Default log file
target                   → Generated stuff
 └ scala-2.10.0            
    └ cache              
    └ classes            → Compiled class files
    └ classes_managed    → Managed class files (templates, ...)
    └ resource_managed   → Managed resources (less, ...)
    └ src_managed        → Generated sources (templates, ...)
test                     → source folder for unit or functional tests
```

# run

## Play 1.x

Change the http.port value in the conf/application.conf file or pass it command line:

```
play run --http.port=8080
```

## Play 2.x - CLI Notes

Play is an sbt plugin so all of the following commands are really just sbt commands. 
You can use any sbt launcher (e.g. sbt, play, or activator). 
The commands below use the activator sbt launcher but you can substitute it for your sbt launcher of choice.

Play 2.x - Dev Mode

For browser-reload mode:

```
activator "run 8080"
```

For continuous-reload mode:

```
activator "~run 8080"
```

## Play 2.x - Debug Mode

To run in debug mode with the http listener on port 8080, run:

```
activator -jvm-debug 9999 "run 8080"
```

## Play 2.x - Prod Mode

Start in Prod mode:

```
activator "start -Dhttp.port=8080"
```

## Play 2.x - Staged Distribution

Create a staged distribution:

```
activator stage
```

For Play 2.0.x and 2.1.x use the target/start script (Unix Only):

```
target/start -Dhttp.port=8080
```

For Play 2.2.x & 2.3.x use the appropriate start script in the target/universal/stage/bin directory:

```
target/universal/stage/bin/[appname] -Dhttp.port=8080
```

With Play 2.2.x & 2.3.x on Windows:

```
target\universal\stage\bin\[appname].bat -Dhttp.port=8080
```

## Play 2.x - Zip Distribution

To create a zip distribution:

```
activator dist
```

For Play 2.0.x and 2.1.x use the start script (Unix Only) in the extracted zip:

```
start -Dhttp.port=8080
```

For Play 2.2.x use the appropriate script in the [appname]-[version]/bin directory:

```
[appname]-[version]/bin/[appname] -Dhttp.port=8080
```

With Play 2.2.x on Windows:

```
[appname]-[version]\bin\[appname].bat -Dhttp.port=8080
```



# database
## h2 database
application.conf
```
db.default.url="jdbc:h2:mem:play;MODE=MYSQL;DB_CLOSE_DELAY=-1"
```

h2 沒有 uuid method, 可以自己加 alias, conf/evolutions/1.sql
```
CREATE ALIAS UUID FOR "org.h2.value.ValueUuid.getNewRandom";
```

## evolutions scripts
location
```
conf/evolutions/[db name]/#.sql

conf/evolutions/default/1.sql
```

Each scripts contains 2 parts:
- The *Ups* part the describe the required transformations.
- The *Downs* part that describe how to revert them.
```sql
# Users schema
 
# --- !Ups
 
CREATE TABLE User (
    id bigint(20) NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    fullname varchar(255) NOT NULL,
    isAdmin boolean NOT NULL,
    PRIMARY KEY (id)
);
 
# --- !Downs
 
DROP TABLE User;
```
evolutions 將 scripts 存在 db 的 PLAY_EVOLUTIONS table，
如果 db 有 64kb size limit, 自行修改 Column Type 或者
不讓 script 超過 64kb

## disable evolutions
application.conf
```
evolutionplugin=disabled
```


# Hello World
目錄架構

使用 g8 產生 template

hello world 畫面

文件 http://localhost:9000/@documentation

helloworld MVC


# 建立 Group - CRUD 與 RESTful

## 目標
本書的練習專案會是一個以 Group 為主的討論區
• 使用者可以建立、管理 Group。
• 使用者可以加入、退出社團。
• 使用者加入此社團後可以發表文章

## 主題
• 學會寫出 CRUD 七個 action 的 controller 與 view • 學會利用 migration 新增資料庫欄位
• 學會撰寫「表單」
• 學會設定 Route
• 學會 resources 的設定(單層 resources)
• 對 Rails RESTful 有初步的理解
• 知道 before_action 使用的場景,並如何應用

## Ch 1.0 CRUD
• 產生 Group 與 Post 這兩個 Model
• Group 需要有名稱 title, description
• Post 需要有文章標題文章內容 content
• 寫出 Group 的 CRUD controller 與 View
• 寫出 Posts 的 CRUD controller 與 View
• 在 routing 中對 Group 和 Posts 分別宣告它們都是 resources


What is 「db migration」?
在傳統開發 web 應用程式的流程中,開發者多半是使用 phpmyadmin 開設 db 欄位。
因此在學習 Rails 之初,剛入門的開發者往往會提出一個質疑:為何必須撰寫 db migration 檔去生欄位,而不是使用傳統的 phpmyadmin?
理由是 db migration 是一個經過實證的最佳解。當多人同時在一個 project 內工作時,縱然 程式碼可以受到版本控制,但是 db schema 卻可能是無法透過版本控制的一個隱憂。
當多人都可以自由的刪改 db 欄位不受監督時,程式碼就很難與 db 欄位有著一致性,將 會有出錯的可能性。為了 automation 以及也能對 db schema 做版本控制,所以才有了 db migration file 的設計。


## Ch 1.1 建立 Groups

### generate groups model
1. db/migrate
2. app/models/Groups.scala
3. test/models/Groups_test.scala

### generate groups control
1. app/controllers/Groups.scala
2. app/views/groups
3. test/controllers/Groups_test.scala
4. assets??

### add routing
參考 Rails convention

## Ch 1.1.1 Group Controller index
app/views/groups/index.scala.html


## Ch 1.1.2 Groups Controller show
app/views/groups/show.scala.html


## Ch 1.1.3 Groups Controller new
app/views/groups/new.scala.html

## Ch 1.1.4 Groups Controller create

## Ch 1.1.5 Groups Controller edit
app/views/goups/edit.scala.html

## Ch 1.1.6 Groups Controller update

## Ch 1.1.7 Groups Controller destroy


## RESTful

參考 Rails-101 補充章節:RESTful on Rails
http://www.slideshare.net/vishnu/discovering-a-world-of-resources-on-rails

• URI,比如:http://example.com/resources/。
• Web Services accept 與 return 的 media type,如:JSON,XML ,YAML 等。
• Web Services 在該 resources 所支援的一系列 request methid : 如:POST,GET,PUT 或 DELETE。


# 在 Group 裡面發表文章 - 雙層 RESTFul 
這一章的練習目標是在 Group 裡面發表文章。並且文 
章網址是使用 http://groupme.dev/group/1/post/2 這種網址表示。

本章練習主題
• 學會 has_many, belongs_to
• 學會 resources 的設定(雙層 resources ) • 使用 before_action 整理程式碼

## Ch 2.1 建立 Posts
### 建立 Posts Model
### 建立 Posts Controller


# 為 Group 與 Post 加入使用者機制



# Content type
利用 request header 的 accept 所帶上來的 content type 判斷要送的 content 格式
```
Accept header: */*;q=0.5,application/json
```
```scala
import play.api.mvc.AcceptExtractors.Accepts
import play.api.mvc.Accepting

val AcceptsMp3 = Accepting("audio/mp3")

val list = Action { implicit request =>
  val items = Item.findAll
  render {
    case Accepts.Html() => Ok(views.html.list(items))
    case Accepts.Json() => Ok(Json.toJson(items))
    case AcceptsMp3() => ???
    // other throw NotAcceptable
  }
}
```


# snippet
判斷是否為 production
DEV mode
PROD mode
```
@if(Play.isProd(Play.current)) {
<script src="@routes.Assets.at("javascripts/scalajs-example-opt.js")" type="text/javascript"></script>
} else {
<script src="@routes.Assets.at("javascripts/scalajs-example-fastopt.js")" type="text/javascript"></script>
}
```


generate slick ddl statement
```
(Suppliers.ddl ++ Coffees.ddl).createStatements.foreach(println)
```
