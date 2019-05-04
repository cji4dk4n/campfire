This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

[Windows]:

### `npm start` 於GitHub抓下來後的開啟方式

1. 開啟cmd
2. 轉至 campfire 資料夾
3. 鍵入 'npm start' 啟動專案

### `npm start` from /jsonserver

資料內容: 

1. 須開啟另一cmd視窗 
2. 轉至 campfire/jsonserver 資料夾
3. 鍵入 'npm start' 啟動簡易資料庫 

[Mac]: 

由於此案是經由Windows環境建立，於Mac開啟可能會有不可預期的錯誤

保證一定可以安全觀看專案的方式是經由 Mac 終端機，使用Create-react-app建立一個新專案，流程為:

1. 安裝node.js: 可於網路上抓取並安裝，會一併安裝套件管理軟體 "npm"，之後可開啟Mac終端鍵入 'npm -v'查看是否有安裝成功，如成功會有版本別顯示
2. 安裝create-react-app: 於終端機中鍵入
### `npm i -g create-react-app`
3. 建立一個新的專案: 於終端機鍵入'create-react-app [你想要的名稱，建議都小寫英文，不要有特殊符號]'  
### `ex: create-react-app campfire`
   之後會詢問一些設置，可一路Enter到底即可
   ps: 建議先移動到自己所創建好的資料夾再執行，假設在桌面有新建的資料夾，可於終端機鍵入 ex:"cd desktop/[你的資料夾名稱]"
4. 專案建立好後將裡面src內容移除，將GitHub中的src資料夾與package.json下載並複製於建立好的專案中
5. 終端機切換到專案的目錄後鍵入
### `npm i`
   ，可將我有使用的套件安裝好
6. 終端機鍵入
### `npm start`
   啟動即可

資料內容部分

1. 建立一個新的資料夾，看自己要設定在哪，假設桌面，終端機鍵入 ex:"cd desktop/[你的資料夾名稱]" 以移動到此路徑
2. 移動好後於終端機輸入 "npm init" 初始化一個專案，之後會詢問一些設置，可一路Enter到底即可，這時資料夾中會有一個檔案名為"package.json"
3. 安裝jsonserver: 於終端機輸入 
### `npm i -s jsonserver`
4. 將GitHub的專案中的jsonserver/package.json及db.json複製到自己桌面的資料夾中
5. 終端機鍵入
### `npm start`
   啟動簡易資料庫