Deployed here ==> https://blog-sgospodinov.netlify.app/
/
├── public/
│ └── favicon.svg
├── src/
│ ├── components/
│ │ └── ...components(reusable ui components)
│ ├── layouts/
│ │ └── ...layouts(reusable ui wrappers)
│ └── pages/
│ └── ...pages(similar to nextjs or remix routing can store md or mdx files as well)
└── package.json

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
