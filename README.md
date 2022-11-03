## Introduction

This is a [Next JS](https://nextjs.org/) web application to display product from Odoo so that buyer can make a request to purchase.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install to Local Machine](#install-to-local-Machine)
- [Files/Folder Structure](#filesfolder-structure)
- [Built With](#built-with)

## Getting Started

In order to run this app on your local machine, you need to do the prequisites

### Prerequisites

- [Node.js](https://nodejs.org/en/) version 10.13 or later
- [Yarn](https://yarnpkg.com/getting-started/install)

### Install to Local Machine

Run the following commands to build an apk and install it on your device.

```bash
# copy example of env file
> cp .env.local.example .env.local
```

Edit the `NEXT_PUBLIC_BASE_API_URL` in file `.env.local` with url of dev/stag/prod base api url.

```bash
# Install dependencies
> yarn

# Build app and made it available on http://localhost:3000/
> yarn dev


# Test app with unit test you have been create
> yarn test

# Format the code you just added
> yarn format
```

### Files/Folder Structure

Here is a brief explanation of the template folder structure and some of its main files usage:

```bash
└── __tests__            # unit test file for files in pages.
└── .docker              # CD (Continuous Delivery) config using jenkins
└── components           # general components used in apps
│   └── __tests__        # unit test file for files in components.
└── json                 # hardcoded data files
└── pages                # all screen in apps
└── public               # files that exposed to public
└── styles               # redux
│   └── global.scss      # global css
└── .eslinrc             # eslint config and rules.
└── .gitignore           # ignored files in Git.
└── .gitlab-ci.yml       # gitlab pipelines config for CI (Continuous Integration).
└── .prettierignore      # ignored files for prettier.
└── .prettierrc          # prettier config and rules.
└── constants.js         # constants used in apps
└── next.config.js       # next js config
└── package.json         # Package metadata and scripts
└── useFallbackImageInSSR.js # file used to display default image
└── webpack.config       # webpack config
└── yarn.lock            # Package metadata generated by yarn.
```

## Built With

- [axios](https://github.com/axios/axios)
- [eslint](https://github.com/eslint/eslint)
- [material ui](https://github.com/mui-org/material-ui)
- [next](https://github.com/vercel/next.js)
- [prettier](https://github.com/prettier/prettier)
- [react](https://github.com/facebook/react/)
- [sass](https://sass-lang.com/)

