---
layout: ../../layouts/MarkdownPostLayout.astro
title: Our first gql schema Part 3
author: Svetozar Gospodinov
description: "Part 3 of blogs series about gql as gateway"
pubDate: 2023-01-01
tags: ["gql", "rest-api", "gateway", "architecture"]
---

## Gql schema

The core of graphql is its schema. In graphql we have mutations(updating data) and queries(getting data) which are the two core operations, inside of them we have resolvers , which have some logic and return the data which we can query.

Example of a query which gets array of cities with name and population props

```graphql
query GetAllCities() {
  getAllCities() {
    cities {
      name
      population
    }
  }
}
```

Example of a mutation which creates new city with two variables name and population(the $ sing is used to declare a variable and then use it in the query)

```graphql
mutation CreateCity($name: String!, $population: Int!) {
  createCity(name: $name, population: $population) {
    cities {
      name
      population
    }
  }
}
```

Our schema will look something like this as you can see we are saying what will our resolvers return as types and what input should be entered, which will generate documentation for our queries and mutations

```graphql
type Query {
    getAllCities():[City!]!
}

type Mutation {
    createCity(city:City!):City!
}

type City {
    name: String!;
    population: Int!;
}
```
