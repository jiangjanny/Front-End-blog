# 什麼是 Sitemap ?

## Sitemap 是一種網站地圖，用於幫助搜索引擎更好地理解和索引網站的結構和內容。它可以有多種形式，主要有以下兩種：

1. **XML Sitemap**: 這是一種專門針對搜索引擎的地圖文件，通常使用 XML 格式。它列出網站上的所有重要 URL（頁面、文章、圖片等），並包含關於每個 URL 的一些附加信息，如上次更新時間、變更頻率和優先級。這種地圖幫助搜索引擎更有效地爬取和索引網站內容。

   典型的 XML Sitemap 示例：

   ```xml
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
           <loc>https://example.com/</loc>
           <lastmod>2024-01-01</lastmod>
           <changefreq>daily</changefreq>
           <priority>1.0</priority>
       </url>
       <url>
           <loc>https://example.com/about</loc>
           <lastmod>2024-01-01</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.8</priority>
       </url>
       <!-- 更多 URL -->
   </urlset>
   ```
2. **HTML Sitemap**: 這是一個面向網站訪問者的網頁，通常顯示網站的主要部分或頁面，幫助用戶更容易找到所需信息。它通常包含所有網站頁面的鏈接，組織成有邏輯的結構。

   典型的 HTML Sitemap 示例：

   ```html
   <html>
   <body>
       <h1>網站地圖</h1>
       <ul>
           <li><a href="/">首頁</a></li>
           <li><a href="/about">關於我們</a></li>
           <li><a href="/products">產品</a></li>
           <li><a href="/contact">聯繫我們</a></li>
       </ul>
   </body>
   </html>
   ```

### Sitemap 的主要作用

1. **改進 SEO**: 提供網站地圖能夠幫助搜索引擎發現並爬取網站上的所有重要頁面，即使它們內部鏈接並不完善。
2. **提升網站可用性**: HTML Sitemap 可以讓訪問者更容易導航，特別是當網站有很多頁面或結構複雜時。
3. **加快索引速度**: Sitemap 可以告訴搜索引擎網站上新內容的變更，使得這些新內容能更快地被索引。

### 如何創建和提交 Sitemap

- **創建 XML Sitemap**: 可以使用許多在線工具或 CMS 插件（如 WordPress 的 Yoast SEO）來生成 XML Sitemap。
- **提交給搜索引擎**: 通過 Google Search Console、Bing Webmaster Tools 等平台提交你的 Sitemap URL（如 `https://example.com/sitemap.xml`），以確保搜索引擎能夠訪問和利用它。

### 注意事項

- 保持 Sitemap 更新：確保 Sitemap 反映了網站的最新狀況。
- 監控錯誤：定期檢查 Sitemap 中的錯誤或問題，以確保搜索引擎可以無障礙地訪問所有列出的頁面。
