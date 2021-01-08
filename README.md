# Swole Bot
Trying to get Swole a fking PS5.

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
Swole Bot attempts to automate as much of the checkout process as possible. It does so by automating the initial phase of the checkout process which consists of: selecting the desired config, adding it to the cart, clicking through the required checkboxes and hitting submit. It then outputs the `CART` cookie once the item has been added to the cart successfully. The idea is that you could take this cookie and quickly paste it to another browser and finish the checkout process. Because the full checkout process was not publicized by the vendor, this is the best you can do.
