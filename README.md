# SwoleBot
Trying to get Swole a fking PS5. Automates part of the checkout process for https://www.sup3r5.com/store/p/retro-inspired-playstation-5-console

## Build
```bash
> yarn build
```

## Run
```bash
> yarn start
```

## Lint
```bash
> yarn lint
```

## Design
### High-level Idea
SwoleBot attempts to automate as much of the checkout process as possible. It does so by automating the initial phase of the checkout process which consists of: selecting the desired config, adding it to the cart, clicking through the required checkboxes and hitting submit. It then outputs the `CART` cookie once the item has been added to the cart successfully. The idea is that you could take this cookie and quickly paste it to another browser and finish the checkout process. Because the full checkout process was not publicized by the vendor, this is the best you can do. The script was tested against other Squarespace e-commerce sites.

### Technical implementation
SwoleBot runs a headless browser using [Puppeteer](https://developers.google.com/web/tools/puppeteer). Using the API's provided by Puppeteer, this script automates the steps required to add the PS5 to cart and then outputs the `CART` cookie.

## Demo
Here is a video of SwoleBot successfully grabbing the `CART` cookie from another site.

<video width="320" height="240" controls>
  <source src="demo.mov" type="video/mp4">
</video>
