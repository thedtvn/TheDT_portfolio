---
title: Library mbbank-lib for python
publishDate: 2020-03-02 00:00:00
img: /assets/stock-1.jpg
img_alt: Stock image
description: |
  We designed a python library to access MB Bank API with python
tags:
  - Dev
  - Library
  - Python
---

## Why MB Bank ?

I'm working on a payment system that need to access MB Bank bank to check transaction. But we i don't have 
corporate tax code to register MB Bank business account to get access.

## What is mbbank-lib can do ?

it can get transaction history from your account, card transaction history, get account balance, saving ... but **CAN'T** tranfer money from your account.

## Technology

- Aiohttp (for Asyncio Request)
- Requests (for Syncio Request)
- Wasmtime (for Run login encryption Wasm)
- Pillow (for image processing)
- Tesseract (for image OCR)