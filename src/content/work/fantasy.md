---
title: Fantasy Bot
publishDate: 2024-07-27 00:00:00
img: /assets/stock-2.jpg
img_alt: Stock image
description: |
  A Multipurpose discord bot that can do many things
tags:
  - Dev
  - Python
  - Rust
  - Discord
---

## What is Fantasy Bot?

Just a discord bot that i in 3 year that it make just for fun and to learn how to code a big project like that i add microservice to it like music api and songbird_node (like lavalink but in rust for save memory) that run as microservice and can scale Horizontal and Vertical.

## Technology
- Python
  - Discord.py
  - Aiohttp ( API )
- Rust
- Redis ( Main Database )
- Java (Old Music API)
- Astro ( Frontend )
- Docker

## Lesson Learned
- Do not use redis as main database it will grow over time and become big and biger also you will need to code a proxy for it if want to save complexity structure.
- Java is using to many memory compare with rust and python.
- Always separate Dev and Production so it will be easier to test and manage and no downtime if code is not work or on time testing something new.
- CI can do many thing like use bandit to check common security issues when push.
- Make Error handle is away need for command to say to user that we are geting error so they will know to stop and know that dev team has track that error.
- Chatgpt can be helpful but some time try to learn it by you self so you will know how to do that.
- Some Api can be hide in core so try to read source that maybe help you to inject your custom data in to input


### [Source code here](https://github.com/fantasybot-red)
