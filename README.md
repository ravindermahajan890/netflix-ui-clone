# TAMASHFLIX-UI

Webapp for TAMASHFLIX

## Local setup

1. Make sure you have node version 18.x installed
2. Download pnpm

```bash
$ npm i -g pnpm
```

## Installing dependencies

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm dev

# production preview
$ pnpm preview
```

## Test

```bash
# unit tests
$ pnpm test

# run tests in watch mode
$ pnpm test:watch

# test coverage
$ pnpm test:coverage
```

## Linting

```bash
# linting
$ pnpm lint

# fix linting
$ pnpm lint:fix
```

## Building the application

```bash
$ pnpm build
```

## Generating component

```bash
# list available commands
$ pnpm generate

# generate component
$ pnpm generate component
```

## Contributing

1. Create branch with name `TMSF-<ISSUE_NUMBER>`.
2. Do require changes for completing the issue with unit tests.
3. Make sure tests are passing with coverage.
4. Make a commit with format
   `<chore|feat|fix>: [TMSF-<ISSUE_NUMBER>] - <commit-message>`
5. Raise the PR and make sure all checks in GitHub actions are passing.
6. Make sure to link the PR with corresponding issue.
