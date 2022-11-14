## 部署流程


1. git clone https://github.com/FrankYeah/fefeFungDevelop.git
2. git checkout develop
3. npm i
4. npm run generate
5. dist 資料夾內 build 出 html 檔案，是 entry point
node v16.14.0


## API 路徑

```
在專案底下新增 .env 檔案，寫入：API_URL=http://34.81.110.243:8081/fongff
```


## Development 

```
yarn dev
/ npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).



## static exporting

```
yarn generate
/ npm run generate
```



## Nuxt 架構


```
nuxt：系統設定勿動
Assets：使用資源
components：組件
dist：build 檔案
layouts：初始畫面
node_modules：install 的檔案
pages：每一頁
plugins：使用的擴充工具
static：靜態路由檔案
store：跨組件溝通
nuxt.config.js：系統設定
package.json：要安裝的檔案與套件
```



