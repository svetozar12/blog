---
layout: ../../layouts/MarkdownPostLayout.astro
title: Graphql gateway introduction Part 1
author: Svetozar Gospodinov
description: "Part 1 of blogs series about gql as gateway"
pubDate: 2022-12-27
tags: ["gql", "rest-api", "gateway", "architecture"]
---

## Quick introduction and context

The app which we are using is a real time chat which uses nextjs and chakraui for Frontend and express for backend(rest api).The idea is to place Graphql gateway in the middle so we can have dynamic documentation, api client and that sweet codegen apolo hooks with types(which are end to end).

## Let's look at the design from high level

![Whimsical example](/images/Gql_Gateway.png "Whimsical example")

We use GQL as a contract between the Frontend and the Backend so we can have mutual types which are the same both in backend and frontend(when something is changed in the contract aka gql schema, our frontend build will fail). We can fetch the gql schema from the frontend and generate queries and types which we can use.

## Issues we would have

- which library would we use for our gql gateway(there are a lot of choices) [Part2](/posts/ChoosingGqlLibrary)
- We have to manage all types for our queries and mutations(which wouldn't be a big problem if you have used typescript before) [Part3](/posts/GqlSchema)
- Error handling inside the gql gateway(gql always returns 200 status code post request) which could be tricky to display in our application [Part4](/posts/GqlErrorHandling)
- How would we codegen the stuff we need from out gql schema [Part5](/posts/GqlCodegen)

![Whimsical example](/images/GQL_GATEWAY_PROS_CONS.png "Whimsical example")
