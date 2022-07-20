---
title: "N & W wkly update #2 — 'don't think too much #lfg'"
date: "2022-07-04"
---

I wish everyone a **happy fourth of july** 🇺🇸! I hope everyone is well rested unlike me who worked on this project until 3 AM this morning lol. I wish I didn't spend too much time on trying to understand everything in Web3 (Farza was right when he said "_just go build_"). It was a never ending rabbit hole. My **14 day goal** was the following:

![nights-and-weekends-goals](/nw-goals.png)

connecting to eth wallet feature and some polishments until 3 AM. My 14 day goal is to allow my blog to connect to 3 wallets (eth, stellar, tezos) and to update the site’s UI color theme to match the ENS avatar if ENS wallets have one. I sorta accomplished this goal.

I will work on stellar and tezos in the upcoming week. I’m just so happy that I got the “connect to eth wallet” and “update the UI based on ENS avatar” parts working. Big thanks to rainbowkit and wagmi for making connecting the wallet part very easy.

My ENS avata by TuffleTribe is in iPFS. I thought this was going to take a lot of work to extract colors since the supported formats for the library I used accepts are in gif, jpg, png, and svg. Thankfully, it was super easy to do in NextJs. All you have to do is adding `images: { domains: ["ipfs.io"],} in next.config.js`,

```
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.io"],
  },
};
```
