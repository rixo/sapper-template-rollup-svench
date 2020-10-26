# Sapper with Svench template

**WIP WIP WIP**

## Install

```bash
npx degit "rixo/sapper-template-rollup-svench" my-app
cd my-app
yarn # or npm install
```

## Usage

Launch Svench:

```bash
yarn svench
```

Launch Svench with Rollup (instead of Nollup by default):

```bash
yarn svench:rollup
```

In both cases, open your browser on http://localhost:4242.

Note: Nollup is also listening on http://localhost:8080 but this is **not** something you can use directly -- Svench's own server will proxy to this one as needed.

## Notes

### `.svench` files in `routes` dir

This is a question of taste, but I would personally be inclined to add `.svench` files for my pages, and colocate them in the `routes` directory. Unfortunately, if you do that, Sapper will see those `.svench` files as server routes, and it will crash everything. For now, the workaround is to prefix `.svench` files with an underscore so that Sapper ignore them. I'm looking to see if there's a clean way to have Sapper ignore `.svench` files entirely.
