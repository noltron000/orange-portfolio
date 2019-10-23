[![Build Status](https://travis-ci.com/noltron000/noltron000.github.io.svg?branch=deploy)](https://travis-ci.com/noltron000/noltron000.github.io)
[![Coverage Status](https://coveralls.io/repos/github/noltron000/noltron000.github.io/badge.svg)](https://coveralls.io/github/noltron000/noltron000.github.io)

---

# Portfolio
Hi there! My name is Nolan Kovacik, and this is my project portfolio.
I consider myself a Frontend Engineer, although I dabble in Backend Systems, and Data Science as well.

> ## React Boilerplate
> This project was set up using `npx create-react-app ./ --typescript`, so it came with some boilerplate commands and code.
> For more information about this, be sure to checkout the auto-generated [react readme](./REACT.md).

## Technologies Used
This portfolio is meant to showcase my aptitudes in *multiple* dimensions.
The repository itself was carefully made to practice many conventions, opinions, and parameters.
Thus, some really cool technologies have been used!
- Command Line
- VSCode
- Git Kraken
- ESLint
- React
- TypeScript
- Jest
- Sass
- Material UI
- GitHub Pages
- Travis CI
- Coveralls
- Husky `?`
- ~~Prettier~~
<!-- - Uglify JS -->
<!-- - Uglify CSS -->

### Why No Prettier?
Prettier is great and all, but it is heavily opinionated.
For a framework that attempts to unify the industry with one standard, its standards don't always align with best practice.
One significant example I ran into was its manipulation of multiline arrays, which should almost always become multiline unless there are two or less items.
For that matter, it doesn't align with my personal conventions.
Since I was butting heads with it so much, and it lacked the configuration that I was looking for, I decided to ditch it.
With that said, I found a nugget of wisdom in my journey in finding prettier configuration:
> *Nobody loves what prettier does to their syntax*<br />
> *Everyone loves what prettier does to their coworkers' syntax*

I won't resent a project that uses prettier for that reason.
But ultimately, for myself, ESLint + Husky is enough to enforce a beautiful code standard.

# Local Setup
1. fork or clone this repository.
1. run `yarn`.
1. run `yarn start`.

# Deployment
1. create a pull request to `dev`.
1. when operations are ready, `dev` will be merged to `deploy`.
1. while on `deploy`, a programmer can run `yarn run deploy` to trigger a build.
	- note: the deployment will only take effect if there are changes to the frontend.
1. `master` is an orphaned branch; github uses this branch as information to host on github pages.

# Resources
1. [TypeScript with React](https://create-react-app.dev/docs/adding-typescript/)
1. [React on GitHub Pages](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)
1. [Zero to Deployed w/Travis](https://medium.com/quick-code/from-zero-to-deployed-with-react-travisci-and-surge-9be99350cf8b)
1. [Automate React w/Travis](https://medium.com/@sumn2u/automate-create-react-app-deployment-to-gh-pages-using-travis-ci-b2a97203680b)
1. [Deploying React to GitHub Pages](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)
1. [GitHub Pages "User Site" w/React](https://medium.com/swlh/deploying-react-apps-to-github-pages-on-master-branch-creating-a-user-site-bc96c2a37dc8)
1. [Integrating Coveralls](https://medium.com/@okunladekayode/how-i-integrated-coveralls-with-my-nodejs-project-95e88b78ae68)
1. [Using ESLint & Prettier in TypeScript](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
1. [Using Sass in React](https://scotch.io/tutorials/using-sass-in-create-react-app-v2)
1. [Easy Git Hooks w/Husky](https://www.vojtechruzicka.com/githooks-husky/)
1. [Massively](https://html5up.net/massively)
1. [Box Sizing](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) *<small>this is from 2012 and is still relevant</small>*
