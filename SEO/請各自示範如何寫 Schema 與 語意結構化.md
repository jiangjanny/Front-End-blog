# 請各自示範如何寫 Schema 與 語意結構化


好的，我們來分別示範如何寫 Schema 和如何進行語意結構化。

### 示範如何寫 Schema

我們將示範如何使用 JSON-LD 格式在網頁中添加 Schema.org 的 Schema 標記。這個示例將展示如何給一個網上商店中的產品添加 Schema 標記，描述其名稱、價格和評論。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Product Page with Schema</title>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Example Product",
  "image": "https://example.com/product-image.jpg",
  "description": "This is an example product description.",
  "sku": "12345",
  "mpn": "ABC123",
  "brand": {
    "@type": "Brand",
    "name": "Example Brand"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "100.00",
    "priceValidUntil": "2025-01-01",
    "itemCondition": "https://schema.org/UsedCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Example Seller"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "10"
  }
}
</script>
</head>
<body>
<!-- 網頁內容 -->
<h1>Example Product</h1>
<p>This is an example product page with Schema.org markup.</p>
</body>
</html>
```

在這個示例中：

- `@context` 指定了使用的語境，這裡是 Schema.org。
- `@type` 指定了標記的類型，這裡是產品（Product）。
- 提供了產品的名稱（`name`）、圖片（`image`）、描述（`description`）、SKU 碼（`sku`）、品牌（`brand`）、價格信息（`offers`）、評分（`aggregateRating`）等。

這樣的標記使得搜索引擎能夠更好地理解和顯示產品的信息，例如在搜索結果中顯示價格、評分等。

### 示範如何進行語意結構化

語意結構化在實際應用中更為廣泛，這裡我們示範如何使用 RDFa 來在 HTML 中進行語意結構化。我們將語意結構化一個簡單的數據表格，將每個人的基本信息表示為語意化的數據。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Semantic Structuring Example</title>
</head>
<body>
<!-- 使用 RDFa 進行語意結構化 -->
<div vocab="http://schema.org/" typeof="Person">
  <h1 property="name">John Doe</h1>
  <dl>
    <dt>Birthdate</dt>
    <dd property="birthDate">1990-01-01</dd>
    <dt>Job Title</dt>
    <dd property="jobTitle">Software Engineer</dd>
    <dt>Address</dt>
    <dd>
      <div typeof="PostalAddress">
        <span property="streetAddress">123 Example St.</span>,
        <span property="addressLocality">Example City</span>,
        <span property="addressRegion">NY</span>,
        <span property="postalCode">10001</span>
      </div>
    </dd>
    <dt>Email</dt>
    <dd><a href="mailto:john.doe@example.com" property="email">john.doe@example.com</a></dd>
  </dl>
</div>
</body>
</html>
```

在這個示例中：

- `vocab="http://schema.org/"` 指定了使用 Schema.org 的語義。
- `typeof="Person"` 指定了這個 `div` 元素表示的是一個人物（Person）。
- 使用 `property` 屬性來標記個人的名稱（`name`）、出生日期（`birthDate`）、職位（`jobTitle`）、地址（`address`）、電子郵件（`email`）等。

這樣的語意結構化使得網頁的信息更易於被機器理解和處理，例如搜索引擎可以理解出生日期、職位等重要信息，從而提升搜索結果的準確性和使用者體驗。

這兩個示例展示了如何分別使用 Schema 標記和語意結構化技術來結構化網頁內容，從而使其更容易被搜索引擎和其他應用程序理解和利用。
