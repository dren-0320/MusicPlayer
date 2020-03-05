

# MusicPlayer
![12_8bu_onpu_renkou](https://user-images.githubusercontent.com/60092543/75995287-8c523e80-5f3f-11ea-8b1b-a01663c78fe7.png)
<br>


## Overview
ブラウザ上で使うことのできる音楽プレイヤー<br>

## Description
* 楽曲登録ページ<br>
　自分の所持している音楽ファイルを楽曲ID・タイトル・歌詞を付与してアップロードし、それらのデータをMongoDBに保存する（音楽ファイルはパス名の保存）<br>
 
* 楽曲再生ページ<br>
　MongoDBに保存されている情報を楽曲IDボタンによって検索し、その楽曲IDの音楽を再生する<br>

## Demo
1. 所持している音楽ファイルを選択する<br>
<img width="1362" alt="スクリーンショット 2020-03-05 22 53 42" src="https://user-images.githubusercontent.com/60092543/75992360-2e235c80-5f3b-11ea-8269-f1eca1de1ae2.png">

2. 一意な楽曲ID、タイトル、歌詞を入力し、「ADD」ボタンをクリックする<br>
<img width="1365" alt="スクリーンショット 2020-03-05 22 54 36" src="https://user-images.githubusercontent.com/60092543/75992371-34193d80-5f3b-11ea-9886-237750335d25.png">

3. 楽曲再生ページに移動し、聴きたい楽曲の楽曲IDと一致するボタンをクリックし、再生ボタンを押すことで音楽が再生される<br>
　「SCROLL」ボタンで自動スクロールを開始、「STOP」ボタンで停止することができる<br>
<img width="1365" alt="スクリーンショット 2020-03-05 22 55 38" src="https://user-images.githubusercontent.com/60092543/75992373-354a6a80-5f3b-11ea-8787-097b7f7d635c.png">

## Requirement
```
"cookie-parser": "~1.4.4"
"debug": "~2.6.9"
"express": "~4.16.1"
"http-errors": "~1.6.3"
"morgan": "~1.9.1"
"nodemon": "~2.0.2"
"mongoose": "~5.7.12"
"multer": "~1.4.2"
```

## Install
* MongoDBのインストール  
```
$ brew install mongodb
```

* expressのインストール
```
$ npm install express
```

* nodemonのインストール
```
$ npm install nodemon
```

* mongooseのインストール
```
$ npm install mongoose --save
```

* multerのインストール
```
$ npm install --save multer
```

## Usage
```
$ git clone https://github.com/dren-0320/MusicPlayer.git
$ mongod --dbpath /usr/local/var/mongodb/
```
別のターミナルを開く
```
$ npm start
```

## Note 
* 音楽ファイルは.mp3ファイルを対象とする<br>
* ブラウザはGoogle Chromeを対象とする<br>

## Author
* dren-0320
