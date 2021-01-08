const puppeteer = require("puppeteer");

const config = {
  url: "https://www.sup3r5.com/store/p/retro-inspired-playstation-5-console",
  userAgent:
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
  sleep: 10,
};

(async () => {
  console.log("starting bot...");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setUserAgent(config.userAgent);
  await page.goto(config.url);

  var loop = true;
  while (loop) {
    const start = Date.now();
    console.log("updating product variants...");
    await page.evaluate(() =>
      document
        .querySelector(".product-variants")
        ?.setAttribute("data-unselected-options", "[]")
    );

    console.log("updating selected variant...");
    const selectedVariant =
      '[{"attributes":{"Extra Controller":"Yes","Model":"Disc"},"optionValues":[{"optionName":"Extra Controller","value":"Yes"},{"optionName":"Model","value":"Disc"}],"id":"337cad00-a8b7-45a6-a1e6-e7315891c673","sku":"SQ4925544","price":84900,"salePrice":0,"priceMoney":{"currency":"USD","value":"849.00"},"salePriceMoney":{"currency":"USD","value":"0.00"},"onSale":false,"unlimited":false,"qtyInStock":0,"width":0.0,"height":0.0,"weight":0.0,"imageIds":[],"mainImageId":"5ff665d87a1d670550d4f134","images":[],"mainImage":{"id":"5ff665d87a1d670550d4f134","assetUrl":"https://images.squarespace-cdn.com/content/v1/5fe8daba1ae217359d4007d2/1609983449114-UHH4F5YWTCLPFD3LIK3Z/ke17ZwdGBToddI8pDm48kNfamtNAk-WIc8GD_gSsyq17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYMBAsMLaL4BSFJXp-3ApWDOT4U22Tl7kzO-u1BPTfQS6JueMwxDH6-6V_q58jMZYg/PS5_30.jpg","systemDataSourceType":"JPG","systemDataVariants":"2138x1575,100w,300w,500w,750w,1000w,1500w","originalSize":"2138x1575","mediaFocalPoint":{"x":0.5,"y":0.5,"source":3},"title":"","displayIndex":0},"len":0.0},{"attributes":{"Extra Controller":"No","Model":"Disc"},"optionValues":[{"optionName":"Extra Controller","value":"No"},{"optionName":"Model","value":"Disc"}],"id":"d5dc72eb-809d-45e3-a2a6-9be6978e8587","sku":"SQ6518365","price":74900,"salePrice":0,"priceMoney":{"currency":"USD","value":"749.00"},"salePriceMoney":{"currency":"USD","value":"0.00"},"onSale":false,"unlimited":false,"qtyInStock":0,"width":0.0,"height":0.0,"weight":0.0,"imageIds":[],"mainImageId":"5ff665d87a1d670550d4f134","images":[],"mainImage":{"id":"5ff665d87a1d670550d4f134","assetUrl":"https://images.squarespace-cdn.com/content/v1/5fe8daba1ae217359d4007d2/1609983449114-UHH4F5YWTCLPFD3LIK3Z/ke17ZwdGBToddI8pDm48kNfamtNAk-WIc8GD_gSsyq17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYMBAsMLaL4BSFJXp-3ApWDOT4U22Tl7kzO-u1BPTfQS6JueMwxDH6-6V_q58jMZYg/PS5_30.jpg","systemDataSourceType":"JPG","systemDataVariants":"2138x1575,100w,300w,500w,750w,1000w,1500w","originalSize":"2138x1575","mediaFocalPoint":{"x":0.5,"y":0.5,"source":3},"title":"","displayIndex":0},"len":0.0},{"attributes":{"Extra Controller":"Yes","Model":"Digital"},"optionValues":[{"optionName":"Extra Controller","value":"Yes"},{"optionName":"Model","value":"Digital"}],"id":"61094f85-de64-4ea9-96fc-4d19f08672c2","sku":"SQ8030990","price":74900,"salePrice":0,"priceMoney":{"currency":"USD","value":"749.00"},"salePriceMoney":{"currency":"USD","value":"0.00"},"onSale":false,"unlimited":false,"qtyInStock":0,"width":0.0,"height":0.0,"weight":0.0,"imageIds":[],"mainImageId":"5ff665d87a1d670550d4f134","images":[],"mainImage":{"id":"5ff665d87a1d670550d4f134","assetUrl":"https://images.squarespace-cdn.com/content/v1/5fe8daba1ae217359d4007d2/1609983449114-UHH4F5YWTCLPFD3LIK3Z/ke17ZwdGBToddI8pDm48kNfamtNAk-WIc8GD_gSsyq17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYMBAsMLaL4BSFJXp-3ApWDOT4U22Tl7kzO-u1BPTfQS6JueMwxDH6-6V_q58jMZYg/PS5_30.jpg","systemDataSourceType":"JPG","systemDataVariants":"2138x1575,100w,300w,500w,750w,1000w,1500w","originalSize":"2138x1575","mediaFocalPoint":{"x":0.5,"y":0.5,"source":3},"title":"","displayIndex":0},"len":0.0},{"attributes":{"Extra Controller":"No","Model":"Digital"},"optionValues":[{"optionName":"Extra Controller","value":"No"},{"optionName":"Model","value":"Digital"}],"id":"d1123b96-b10f-47af-a09e-063fb7fef2c0","sku":"SQ6000456","price":64900,"salePrice":0,"priceMoney":{"currency":"USD","value":"649.00"},"salePriceMoney":{"currency":"USD","value":"0.00"},"onSale":false,"unlimited":false,"qtyInStock":0,"width":0.0,"height":0.0,"weight":0.0,"imageIds":[],"mainImageId":"5ff665d87a1d670550d4f134","images":[],"mainImage":{"id":"5ff665d87a1d670550d4f134","assetUrl":"https://images.squarespace-cdn.com/content/v1/5fe8daba1ae217359d4007d2/1609983449114-UHH4F5YWTCLPFD3LIK3Z/ke17ZwdGBToddI8pDm48kNfamtNAk-WIc8GD_gSsyq17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYMBAsMLaL4BSFJXp-3ApWDOT4U22Tl7kzO-u1BPTfQS6JueMwxDH6-6V_q58jMZYg/PS5_30.jpg","systemDataSourceType":"JPG","systemDataVariants":"2138x1575,100w,300w,500w,750w,1000w,1500w","originalSize":"2138x1575","mediaFocalPoint":{"x":0.5,"y":0.5,"source":3},"title":"","displayIndex":0},"len":0.0}]';
    await page.evaluate(
      (variant) =>
        document
          .querySelector(".product-variants")
          ?.setAttribute("data-selected-variant", variant),
      selectedVariant
    );

    await page.evaluate(() =>
      document.querySelector(".sqs-add-to-cart-button-inner")?.click()
    );

    console.log("checking boxes...");
    await page.evaluate(() =>
      document
        .querySelectorAll("input[type='checkbox']")
        ?.forEach((element) => element.parentElement.click())
    );

    console.log("submitting form...");
    await page.evaluate(() =>
      document.querySelector("input[type='submit']")?.click()
    );

    await page.screenshot({ path: "screenshots/final.png" });

    console.log("outputting cookies...");
    const cookies = await page.cookies();
    console.log(cookies);

    const cartCookie = cookies.filter((e) => e.name === "CART");
    if (cartCookie.length > 0) {
      console.log(`CART COOKIE: ${cartCookie[0].value}`);
      loop = false;
    }

    console.log(`runtime: ${Date.now() - start} ms`);

    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.waitForTimeout(config.sleep);
  }

  await browser.close();
})();
