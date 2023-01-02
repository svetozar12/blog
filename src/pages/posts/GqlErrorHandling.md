---
layout: ../../layouts/MarkdownPostLayout.astro
title: Graphql Error Handling Part 4
author: Svetozar Gospodinov
description: "Part 4 of blogs series about gql as gateway"
pubDate: 2022-12-27
tags: ["gql", "rest-api", "gateway", "architecture"]
---

## Error handling

If our api throws an error our gql server will give us status code 200 and error array, which is hard to work with on the Frontend. The easiest approach would be to use unions which means that we specify the types of responses that are possible so we can alter the response body.

```graphql
type Error {
    message: String!;
}

type CityUnion = City | Error;
```

and in our resolver we have to add something like this

```typescript
const res = await api();
if (!res) return { __typename: "Error", res };
return { __typename: "City", ...res };
```

and now our query would look something like this

```graphql
query GetAllCities() {
  getAllCities() {
    __typename
    ... on City {
    cities {
      name
      population
    }
    }
    ... on Error {
      message
    }
  }
}
```

so now when we get error our gql server return just the message which we want to display
