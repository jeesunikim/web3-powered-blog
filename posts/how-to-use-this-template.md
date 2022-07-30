---
title: "How to Use “Web 3 Powered Blog” Template"
date: "2022-08-06"
image: "/toast.jpg"
tags: ["code"]
---

this blog post will be ready for tomorrow (07/09)! I have more thoughts about
this blog post after this week's buildspace's weekly session with
[Ryan Hoover](https://twitter.com/_buildspace/status/1545549347919626240?s=20&t=cxiS0Q17RU_SWmk8h16edg).

## My story with blog

My first blog was custom built on wordpress in 2013. I was worried about my
future at that time. I had just recently graduated from the University of Miami
with a major in multimedia and minor in graphic design. I was on a F1 student
visa and my temporary employment Optional Practical Training (OPT) had just
started and I only had a year to look for a job and be employed. The skills I
learned for my major/minor weren’t much in demand at that time. However, the
basic web development skills I acquired by taking elective courses by Kim
Grinfeder were in demand and I was able to find a side job here and there. This
is when I decided to learn more about web development and take classes on
Treehouse post college. I took the course on building a custom wordpress theme
using PHP. At that time people were either using platforms like Wordpress or
Blogger. Designer in me hated the boring homogenous look on free themes on
Wordpress and Blogger, the popular blog publishing platform at the time so I
decided to design my own blog and build it from scratch.

Long story short, that blog became my digital home. I shared everything from my
coding journey to internship experience at Ultra Music Festival (UMF) to cooking
journey. I started getting emails from people about my blog, mostly on how to
get an internship at UMF, but it was so cool to hear from people otherwise I’d
not have.

PIC OF STEVE AOKI AT UMF

The most unexpected result of that blog was it got me interviews with companies
for a developer position, one of them was Crispin Porter + Bogusky (CP+B). I
applied for a designer position and the recruiter at that time reached out and
asked if I were interested in a developer position. After a round of interviews,
I got a developer intern position at CP+B, one of the biggest digital ad
agencies in the world. When I asked the recruiter what she liked the most about
my resume, she said “Your blog really stood out. It was personal and I loved the
progress you’ve made with your coding journey. Even after reviewing thousands of
resumes, I remembered you.”

PIC OF ACCEPTANCE LETTER

## Pros & Cons of Blogging on Your Personal Site

There are many pros of blogging on your personal site and third party blog
publishing platforms like medium. This
[medium post](https://writingcooperative.com/personal-blog-websites-vs-medium-pros-and-cons-a375b953ca75)
by Lorna Ye written in 2019 summed it up well.

Pros of Blogging on Your Personal site

You have ownership of your site You can customize your site at your liking
(create branding) You can have multiple webpages for different purposes (I can
post about code, food, and life in miami without looking odd) You can monetize
your blog website using affiliate links or other ways

I think #1 and #2 are the biggest pros of blogging on your personal site —
ownership and the branding. When I think of branding, my favorite bloggers —
[Josh Comeau](https://www.joshwcomeau.com/), [Lee Robinson](https://leerob.io/),
[Devon Zuegel](https://devonzuegel.com/), and
[Kent C. Dodds](​​https://kentcdodds.com/) — come to mind :).

Pros of Blogging on Your Personal site

You can focus on writing, not worry about technical issues. The platform itself
is like a community and helps your blog grow Medium Partner Program allows
writers to be paid

I agree with #1 — some people just want a platform to publish their ideas. If
you look at her medium post’s comments section, many medium writers agreed with
#2

PIC OF THE COMMENT (“It warms my heart when my articles get claps, responses, or
highlights from my readers or fellow writers. In return, I give my support to
other writers whenever I can.”)

But I think that utilizing web3 technologies in personal blogs can achieve #2
and #3 pros of centralized publishing platforms.

## Web3 Powered Blog — Proof of Concepts

My “Web3 Powered Blog” for buildspace’s N&W will explore three blockchains.

### Ethereum for curated content and user experience

When I asked “what would be some good use cases to use ‘connect wallet’ feature
on a personal blog?” I loved what Kyle suggested:
https://twitter.com/kylemccollom/status/1527314701486817282?s=20&t=1lppwbwVbcslWIjielAC5A

The first thing I did after implementing the “connect to eth wallet“ feature via
Wagmi and RainbowKit was to extract the wallet user’s ENS and its avatar
information and change my blog’s color scheme to match the user’s ENS avatar
colors. Now that my blog has access to the user’s public information, I can
customize the look for the user.

PIC OF BACKGROUND COLOR EXAMPLES

(I plan on creating miami themed graphics for the background later on. I’m
focusing on building the core functionalities first and then work on polishing
items later)

For the following suggested lists:

- only let logged in users read a specific post
- only let users with a specific token (a .eth handle) read a post

Since I’m a nobody and my goal for the blog is to gain traction to the site, it
doesn’t make sense for a blogger like me to create specific posts for users who
connected their wallets or have a specific token. However, I can see token gated
content becoming popular for celebrities. I am excited to see what kind of
content or events
[Binance’s NFT partnership with Cristiano Ronaldo](https://www.binance.com/en/blog/markets/cristiano-ronaldo-and-binance-team-up-for-a-legendary-nft-partnership-421499824684904050)
will unlock. With recent news of major social media platforms integrating NFTs
on Polygon (they announced more chains to adopt later), I’m curious if they’ll
allow certain high profile users to token gate some of their content based on
NFTs. It’s pretty cool that NFTs are bridging social media.

https://twitter.com/nir_III/status/1545220282796867584?s=20&t=1lppwbwVbcslWIjielAC5A

My blog posts will be available to all, but what I can do is to highlight web3
blog posts if users connect with a ETH/Stellar/Tezos wallet either by filtering
to display web3 blog posts first or indicate web3 blog posts with
[this animated sparkling](https://www.joshwcomeau.com/react/animated-sparkles-in-react/).
I can also customize the UX by NFTs the users hold. I have a membership-like NFT
in Developer DAO and Lens Protocol. I have earned 3 NFTs from buildspace for
completing courses. For users that share the same NFTs as me, I can create a
personalized page or quick hello message to share that ‘hey, we have [this] and
[this] in common’.

Another goal of the blog is adding a “like” button and “comments” section like
medium does, but these functionalities will be only available to users who
connect their wallet to either ETH/Stellar/Tezos. One of the post launch goals
is launching the “Genesis” NFT collection and airdrop them to the wallet users
who interact with my blog a lot. It’ll be my way of saying ‘thank you’ and no,
it’ll be airdrop, no purchase needed at least for my early users. But hopefully,
this will motivate me to write interesting blog posts consistently and if users
with the genesis NFT decide to sell, I’ll get royalties based on the amount they
sell so win win for both me and the user. You might ask, do users with the
genesis NFTs get special access to content or something? Well, I don’t know yet!
This is one proof of concept so I’m experimenting with it.

I think this kind of fan based or token gated NFTs should be a must try for
power bloggers. For example, [the Pasta Queen](https://thepastaqueen.cooking/)
is launching a cookbook in November and its pre-order is available right now.
Let’s say she gives out NFTs for her fans who pre-order her book and both
Instagram and Facebook allow her to token gate some of her social media content
or live video for the fans (who are already likely to follow her on social
media) based on her NFTs. I think it’ll be pretty cool.

### Stellar for purchasing digital goods and sending and receiving tipping/salary fast and cheap

\*\*disclaimer: I work at Stellar Development Foundation

Transactions on Stellar are confirmed in 3-5 seconds. ‍ Transact in USD, EUR,
NGN, MXN, BRL, ARS, and more … or create new digital currencies for your
specific needs by becoming an anchor.

Built-in features allow unified KYC/AML via partners and travel rule compliance.

Moneygram cash in and out

“Early last year, he started doing graphic design and translations online. But
most websites pay for freelance work through PayPal and the like, which we can’t
use because exchange controls here allow Venezuelan banks to use only local
currency. (For the outside world, even those of us who have bank accounts here
are effectively unbanked.) So Juan had to turn to cryptocurrencies to get paid.”
(https://www.nytimes.com/2019/02/23/opinion/sunday/venezuela-bitcoin-inflation-cryptocurrencies.html)

https://twitter.com/Austen/status/1533171268106735616?s=20&t=D2UYP-OktrwjeUOddR3-Cw

### Tezos for generative art
