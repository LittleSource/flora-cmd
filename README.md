# flora-cmd

```shell
npm i flora-cmd -g
```

## 例子

![terminal-example](https://github.com/LittleSource/flora-cmd/blob/main/example/terminal.png?raw=true)

在终端执行`f g`就相当于执行`flora generate`

在终端执行`f uc`就相当于执行`flora updatedb --create_db`

...

## 目前已支持的命令

g: flora generate 生成代码

s: flora server 启动后端服务

w: flora watch 启动watch进程

u: flora updatedb 更新数据库

uc: flora updatedb --create_db 创建并更新数据库

up: flora upgrade go.mod依赖关系的版本升级

r: flora code release 版本发布

doc: flora doc 打开web文档

## 待支持

### 1. 支持预设项目路径

eg .

`f set 1 ~/a2/src/eng/polarise-acgedu/projects/dev`

`f cd 1`

`f list`

### 2. 支持多参数

暂时只支持一个参数，例如`flora code init ma.applysquare.net/hzl/flora-hello`

这种需要`ma.applysquare.net/hzl/flora-hello`参数的flora命令暂不支持，以后有空会更新。

```shell
flora project dbreset # 会删除所有数据
flora project dburl #打印数据库访问地址
flora code init xxx
flora project dbdump > /tmp/my_backup.sql
flora k8s xxx
```

## support

[temir](https://github.com/webfansplz/temir)
