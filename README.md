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
SwoleBot attempts to automate as much of the checkout process as possible. It does so by automating the initial phase of the checkout process which consists of: selecting the desired config, adding it to the cart, clicking through the required checkboxes and hitting submit. It then outputs the `CART` cookie once the item has been added to the cart successfully. The above process repeats in a loop until the item has been added the cart successfully. The idea is that you could take this cookie and quickly paste it to another browser and finish the checkout process. Because the full checkout process was not publicized by the vendor, this is the best you can do. The script was tested against other Squarespace e-commerce sites.

### Technical implementation
SwoleBot runs a headless browser using [Puppeteer](https://developers.google.com/web/tools/puppeteer). Using the Puppeteer APIs this script automates the steps required to add the PS5 to the cart and then outputs the `CART` cookie. Intermittent screenshots are rendered and saved in the `screenshots/` directory.

## Demo
Here is a video of SwoleBot successfully grabbing the `CART` cookie from another Squarespace-based site.

![Demo](demo/demo.gif)

### Console Output
Example console output with some values removed (gtfo of my cookie jar):

```bash
starting bot...
iteration #1610138011928
updating product variants...
updating selected variant...
checking boxes...
submitting form...
outputting cookies...
[
  {
    name: 'hasCart',
    value: 'true',
    domain: 'knots-uk.com',
    path: '/',
    expires: 1611347612.087399,
    size: 11,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: '_gat',
    value: '1',
    domain: '.knots-uk.com',
    path: '/',
    expires: 1610138071,
    size: 5,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: 'ss_cpvisit',
    value: <removed>,
    domain: 'knots-uk.com',
    path: '/',
    expires: 1673210012.087509,
    size: 23,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: 'ss_cvisit',
    value: <removed>,
    domain: 'knots-uk.com',
    path: '/',
    expires: 1610139812.087453,
    size: 22,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: '_ga',
    value: <removed>,
    domain: '.knots-uk.com',
    path: '/',
    expires: 1673210011,
    size: 30,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: 'ss_cid',
    value: <removed>,
    domain: 'knots-uk.com',
    path: '/',
    expires: 1673210012.087422,
    size: 42,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: 'ss_cvt',
    value: <removed>,
    domain: 'knots-uk.com',
    path: '/',
    expires: 1610139811,
    size: 19,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: 'CART',
    value: 'F5NUH6pxkjb...<removed>...poIuZD_B2WoQ',
    domain: 'knots-uk.com',
    path: '/',
    expires: 1611347612.087337,
    size: 44,
    httpOnly: true,
    secure: false,
    session: false
  },
  {
    name: '_gid',
    value: <removed>,
    domain: '.knots-uk.com',
    path: '/',
    expires: 1610224411,
    size: 30,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: 'ss_cvr',
    value: <removed>,
    domain: 'knots-uk.com',
    path: '/',
    expires: 1673210011,
    size: 86,
    httpOnly: false,
    secure: false,
    session: false
  },
  {
    name: 'crumb',
    value: <removed>,
    domain: 'knots-uk.com',
    path: '/',
    expires: -1,
    size: 57,
    httpOnly: false,
    secure: false,
    session: true
  }
]
CART COOKIE: F5NUH6pxkjb...<removed>...poIuZD_B2WoQ
runtime: 324 ms
```

## Final thoughts
In an ideal world you could imagine running this bot in a cluster where many browsers run through many different IPs using a proxy. You could simulate as many users as IPs you have available and further increase your odds of grabbing a `CART` cookie. Note that the current implementation runs serially which hinders the overall throughput/chances of getting a `CART` cookie when competing with thousands of other users/bots.

## Disclaimer
This bot exists purely for illustrative and educational purposes.
