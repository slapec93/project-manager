# Simple project manager

## Scope

* Add new comment for a project
* Change the status of a project

## Not in the scope, but required for an MVP

Some scope cuts were made to stay within the time limit, but the features listed below are esssential for a usable product

* Authentication
* Authorization (which user can create new project, which user can comment on a particular project)
* Add projects, remove projects
* User management (register new users, delete them)
* Logout

### DevOps

* Setup CI/CD

## Deployed app

[Find it here]()

Theres two users created with the username `Gergely` and `ProductOwner`. Navigating to the app, it redirects to the login page, where (for the sake of simplicity) the username has to be entered, after the user is redirected the list of products (there's one project pre-created). Clicking on the project, the app redirects to the detail page of the project, where the user can see the already created comments and submit new ones. The status of the project can be changed from this page as well.