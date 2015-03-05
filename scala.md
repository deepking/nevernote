# Scala Levels
- http://www.scala-lang.org/old/node/8610
- http://horstmann.com/scala/

# Higher-Order Function

```scala
def mulOneAtATime(x: Int) = (y: Int) => x * y
mulOneAtATime(6)(7) // 42
val f = mulOneAtATime(6)
f(7) //42
```
shortcut
```scala
def mulOneAtATime(x: Int)(y: Int) = x * y
```

example
```scala
val a = Array("Hello", "World")
val b = Array("hello", "world")
a.corresponds(b)(_.equalsIgnoreCase(_)) // true
```


# Case Class
apply
unapply

# Seq
```
def makeProjects(toMake: Seq[ProjectTree]) {
    toMake match {
      case current :: rest =>
        makeProjects(rest)
      case Nil => 
    }
}
```


# java conversions

import scala.collection.JavaConversions._
import org.jooq.scala.Conversions._
