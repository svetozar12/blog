---
layout: ../../layouts/MarkdownPostLayout.astro
title: Using Gql as a gateway between your api and consumers
author: Svetozar Gospodinov
description: "After researching gql for a while i decided to start writing about my learnings"
pubDate: 2022-12-27
tags: ["gql", "rest-api", "gateway", "architecture"]
---

## Quick introduction and context

The app which we are using is a real time chat which uses nextjs and chakraui for Frontend and express for backend(rest api).The idea is to place Graphql gateway in the middle so we can have dynamic documentation, api client and that sweet codegen apolo hooks with types(which are end to end).

## Let's look at the design from high level

![Whimsical example](/images/Gql_Gateway.png "Whimsical example")
