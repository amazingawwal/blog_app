# Blog API with NestJS, Prisma & SQLite
A simple RESTful API built with NestJS framework, Prisma ORM, and SQLite database.
This API manages blog articles with full CRUD operations.


# Tech Stack
- Framework: NestJS
- Database: SQLite
- ORM: Prisma
- Language: TypeScript


# Features
1. Create, Read, Update, and Delete blog articles
2. Auto-generated Swagger API documentation
3. Prisma ORM integration with SQLite
4. Error handling with DTO and Prisma Client


# API Endpoints
GET	/article	 -- Retrieve all articles
GET	/article/:id	-- Retrieve a specific article by ID
POST	/article	-- Create a new article
PATCH	/article/:id	-- Update an existing article
DELETE	/articles/:id	-- Delete an article by ID


# Database Schema

## The Article model includes:
```model Article {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```


# Setup Instructions

## Clone the repository

```
git clone https://github.com/amazingawwal/blog_app
```
```
  cd blog_api
```

## Install dependencies
``` 
npm install
```

## Run migrations
```
npx prisma migrate dev --name initial-db-migration
```

# Generate Prisma Client
```
npx prisma generate
```

# Start the server
``` 
npm run start:dev
```

# Swagger API Documentation
Swagger UI is available at:
[Swagger API](http://localhost:3000/api)


# Testing with test.rest
This project includes a test.rest file for use with the REST Client VS Code extension.

- Install the extension: REST Client

- Open test.rest in VS Code

- Click “Send Request” above any endpoint request

- View the response in the editor.


## -----------------------------------------------------------------------------
Built with ❤️ by yours truly @amazingAwwal