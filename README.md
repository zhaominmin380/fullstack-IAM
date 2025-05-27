# Coffee Shop Full Stack

## Full Stack Nano - IAM Final Project

This project is part of the Udacity Full Stack Nanodegree, where the goal is to design and build a complete drink menu management application with authentication and role-based access control using Auth0.

Udacity is planning to open a new, tech-enabled café where students can browse drink options, view their ingredients, and manage the drink recipes through a digital system. Your role in this project is to implement a secure, scalable backend and integrate it with a modern frontend UI to power this interactive experience.

## Core Functionality

### Public Users
* View a list of drink names and associated graphics (ratios only, no full recipe)
* No login required

### Baristas
* View detailed drink recipes, including full ingredients and proportions
* Requires authentication via Auth0
* Role: barista

### Managers
* Full access to the system:
    * View all drinks
    * Add new drinks
    * Update existing drinks
    * Delete drinks
* Requires authentication via Auth0
* Role: manager

## Authentication & Authorization with Auth0
This project uses Auth0 to handle user authentication and role-based access control via JWTs (JSON Web Tokens).

* Users must log in via Auth0 to gain barista or manager access

* The backend validates tokens and enforces permissions using decorators

* Permissions (like get:drinks-detail, post:drinks, patch:drinks, delete:drinks) are embedded in the JWT

* Unauthorized or unauthenticated access attempts return 401 or 403 errors with descriptive messages

Example secured endpoint in Flask:
```
@requires_auth('get:drinks-detail')
def get_drinks_detail(payload):
    ...
```
## Technologies Used
**Backend**: Flask, SQLAlchemy, PostgreSQL

[View the README.md within ./backend for more details.](./backend/README.md)

**Frontend**: React (provided by Udacity)

[View the README.md within ./frontend for more details.](./frontend/README.md)
**Authentication**: Auth0 (OAuth2 + JWT)