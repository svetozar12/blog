---
layout: ../../layouts/Markdown.astro
title: CI/CD pipeline with github actions
author: Svetozar Gospodinov
description: "How to integrate pipeline with github actions and railway"
pubDate: 2023-02-19
tags: ["ci", "cd", "pipeline", "devops", "github actions", "railway"]
---

## Benefits of Ci/Cd

- Find out about problems early and fix them
- Easier integration with bigger teams
- Pretty easy to setup
- Not very expensive
- Automate repetitive tasks(like deployment and etc)

## Cons of Ci/Cd

- Doesn't bring a lot of value for a project which is developed by single person

## How does it work ?

Its very simple you need a config file in which you will describe the steps of your workflow which usually are

- Installing dependencies
- Building project
- Running linters
- Running tests
- Deploying

### Example for config file in github actions

/.github/workflows/test.yaml

````yaml
name: Book API
on:
  push:
    branches:
      - "ci/cd-nodejs"
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Use NodeJs
        uses: actions/setup-node@v1
        with:
          node-version: "18.x"
      - name: Install dependecies
        run: yarn
      - name: Run tests
        run: yarn test
      - name: Install railway cli
        run: npm i -g @railway/cli
      - name: Deploy
        run: RAILWAY_TOKEN=$RAILWAY_TOKEN railway up
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}```
````

Now on every push to branch ci/cd-nodejs our tasks will be executed

# [Source code](https://github.com/svetozar12/tutorials/tree/ci/cd-nodejs)
