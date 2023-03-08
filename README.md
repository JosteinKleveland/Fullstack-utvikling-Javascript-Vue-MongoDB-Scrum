
# ToolTime

  
## Setup and build
MongoDB-login

>Username: Group47-ToolTime
>
>Password: AQQUrasfSOCT9PDN


### How to run
Before building the app, run the following:
```
cd tooltime/api
npm i body-parser dotenv express mongoose morgan nodemon

cd ../ui
npm i axios core-js pinia sweetalert sweetalert2 vue vue-router vuetify
```

After installing the required dependencies, run the following to build :
```
cd tooltime
npm install

--In api
cd ./tooltime/api
npm run dev

--In ui (different terminal)
cd ./tooltime/ui
npm run serve
```

## Conventions

### Commits

All commit messages should be structured as follows:
```
<type>(optional scope): <description> - Scope e.g issue number

[optional body] - Extra description

[optional footer(s)] - e.g Co-authors
```

| Type   |      Commit Message      |
|----------|-------------|
| Feature | feat(#1): Add awesome feature |  
| Fix | fix(#1): Fix annoying bug |  
| Test | test: Add unit test for feature | 
| Docs | docs: Correct spelling of word | 
| Refactor | refactor: Change folder structure | 
#### Extra info:
- **Commit message descriptions** must be written in **imperative** (e.g **Add, Update, Fix**)
- **Extra description** and **co-authors** must be separated with **two line breaks**.


### Issues
- Issues should have an identifier at the start in imperative
- Issues should only relate to one part of the stack (e.g only backend or only frontend) - **Make multiple issues**
- ...

## Getting started

  

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

  

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

  

## Add your files

- [ ]  [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo

git remote add origin https://gitlab.stud.idi.ntnu.no/tdt4140-2023/landsby-3/gruppe-47/tooltime.git

git branch -M main

git push -uf origin main

```
