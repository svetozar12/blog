---
layout: ../../layouts/Markdown.astro
title: Graphql Codegen Part 5
author: Svetozar Gospodinov
description: "Part 5 of blogs series about gql as gateway"
pubDate: 2022-12-27
tags: ["gql", "rest-api", "gateway", "architecture"]
---

## How to handle codegen

We will use [graphql-codegen](https://the-guild.dev/graphql/codegen/docs/getting-started)
This should be added to the frontend

```powershell
yarn add graphql
yarn add -D typescript
yarn add -D @graphql-codegen/cli
yarn graphql-code-generator init
yarn add -D @graphql-codegen/typescript-react-apollo
```

Your codegen.yml should look something like this on the client
schema is the url where our gql server is exposed
documents are the gql queries which we can write so the codegen can create hooks with them

```yaml
overwrite: true
schema: "http://localhost:4003/graphql"
documents: "./src/services/gql/**/*.gql"
generates:
  src/services/generated/index.ts:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
```

and then type yarn <script for codegen> and you should have codegen

Thats it :D
