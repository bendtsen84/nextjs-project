# Next.js project template

Dette repository er en letvægts skabelon til at starte et nyt Next.js-projekt hurtigt og konsistent.  
Tanken er, at du skal kunne spinne et nyt projekt op på få minutter uden at skulle genopfinde grundopsætningen hver gang.

## Kom godt i gang

Opret et nyt Next.js-projekt baseret på denne template:

```bash
npx create-next-app@latest --example https://github.com/bendtsen84/nextjs-project  [projectName]
```

Gå derefter ind i projektmappen:

```bash
cd [projectName]
```

## Initialiser Git repository

Når projektet er oprettet, kan du initialisere dit eget Git-repository:

```bash
git init
git add .
git commit -m "init from template"
git branch -M main
git remote add origin git@github.com:dit-brugernavn/my-new-app.git
git push -u origin main
```

Erstat dit-brugernavn og my-new-app med dine egne værdier.

## Authentication (Auth.js)

Projektet er klargjort til brug med Auth.js (tidligere NextAuth).

Installationsguide og dokumentation findes her:
https://authjs.dev/getting-started/installation?framework=Next.js

### Generér secret

Auth.js kræver en secret til signering af tokens.

Generér den med:

```bash
npx auth secret
```

Kopiér værdien ind i din .env-fil som fx:

```bash
AUTH_SECRET=din_genererede_secret
```

## Noter

- Dette er en template, ikke et færdigt produkt
- Tilpas opsætning, providers og miljøvariabler efter behov
- Brug den som et stabilt udgangspunkt, ikke en spændetrøje

## Release notes

### 2026-01-06

- Opdaterede NextJS, sikkerheds hul er lukket
- Tilføjede cursor command ( /git )
- Udvidet Readme fil.
