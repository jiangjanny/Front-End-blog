# Robots.txt 如何封鎖內容


`robots.txt` 是網站根目錄下的一個文本文件，用來指導網絡爬蟲（如搜索引擎的蜘蛛）如何爬取和索引網站的內容。雖然 `robots.txt` 不能絕對阻止爬蟲抓取內容，但它提供了爬蟲在訪問網站時應遵守的指令。

## 1. `robots.txt` 文件的結構

典型的 `robots.txt` 文件結構如下：

```
User-agent: [爬蟲名稱]
Disallow: [不允許訪問的路徑]
Allow: [允許訪問的路徑]
```

- **User-agent:** 指定爬蟲的名稱（如 `Googlebot`）。用 `*` 表示適用於所有爬蟲。
- **Disallow:** 指定不允許訪問的路徑。空行表示允許訪問所有內容。
- **Allow:** 指定允許訪問的路徑（用於覆蓋 `Disallow` 指令）。

## 2. 封鎖內容的常見例子

### 封鎖整個網站

```plaintext
User-agent: *
Disallow: /
```

### 只封鎖特定目錄

```plaintext
User-agent: *
Disallow: /private/
```

### 只封鎖特定頁面

```plaintext
User-agent: *
Disallow: /secret-page.html
```

### 允許訪問特定子目錄（即使父目錄被封鎖）

```plaintext
User-agent: *
Disallow: /private/
Allow: /private/public-content/
```

### 針對特定爬蟲封鎖內容

```plaintext
User-agent: Googlebot
Disallow: /no-google/
```

## 3. `robots.txt` 文件範例

以下是一個完整的範例 `robots.txt` 文件：

```plaintext
# 針對所有爬蟲封鎖 /admin/ 目錄
User-agent: *
Disallow: /admin/

# 允許所有爬蟲訪問網站根目錄的所有內容
Allow: /

# 針對 Googlebot 封鎖 /private/ 目錄
User-agent: Googlebot
Disallow: /private/
```

## 4. 使用 `robots.txt` 的注意事項

- **不適合敏感信息保護**: `robots.txt` 只能阻止友好的爬蟲，它不能阻止所有訪問。
- **公開可見**: `robots.txt` 文件是公開的，任何人都可以訪問它來查看哪些部分被封鎖。
- **相對路徑**: `Disallow` 和 `Allow` 指令使用相對於網站根目錄的路徑。

## 5. 檢查和測試

你可以使用以下工具來檢查和測試 `robots.txt` 文件的有效性：

- [Google Search Console 的 robots.txt 測試工具](https://search.google.com/search-console/robots-testing-tool)

## 6. 補充資料

- [robots.txt 文件標準](https://www.robotstxt.org/)

這樣，你就可以有效地控制爬蟲如何訪問和索引你的網站內容。
