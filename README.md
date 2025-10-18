# Pet Shop Management

## APIs using Express + MongoDB Atlas


## Features

These APIs are developed using the Express framework, known for its robust routing and excellent support for middlewares. The choice of Express was driven by Node.js' non-blocking input/output operations and its use of the V8 JS engine, which contribute to the fast performance of Express apps.

MongoDB Atlas is used as the database for these APIs. It is a fully-managed cloud database that simplifies the deployment, management, and scalability of your database on popular cloud service providers like AWS, Azure, and GCP.

To enhance the security of our APIs, we have implemented Helmet.js and CORS, which provide protection against scripting attacks.

The codebase follows a strict separation of concerns, ensuring that the controller, business logic, and data access layers are properly organized and decoupled.

## How to Start the Project

To start the project, follow these steps:

1. Clone the repository to your local machine:`git clone https://github.com/your-username/your-repo.git`


2. Navigate to the project directory: `cd Pet-Fast-job`


3. Install the dependencies: `npm install`


4. Create a [`.env`] file in the root directory of the project and add the environment variables mentioned below
`PORT=3000` port where you wish to host the app

`SECRET_KEY="sfhvhvhfjfjjsgfgdfgdf" ` random secret key for auth token generation

`MONGO_URI ="mongodb+srv://<username>:<password>@clustername.mongodb.net"` your MONGODB Atlas connection string


5. Start the server: `npm start`


6. You should see a message indicating that the server is running on the specified port.


7. Authenticate your CRUD APIs by calling the Login API first using any API Client
### Login URL

Endpoint `POST: localhost:<PORT>/v1/login/`

Request Body: 
`{
  "username": "admin",
  "password": "password"
}
`

8. Once the Authentication is successful you can call your CRUD APIs to manage your pet shop

### Base URL
`http://localhost:3000/pets`


### Authentication
Copy the JWT token generated from the Login API and add that to the API header as
Authorization: Bearer <token>

1. Fetch All Pets
Endpoint: `GET /pets/`

Description: Retrieves a list of all pets.

Headers: `Authorization: Bearer <token> `


2. Fetch Pet by ID
Endpoint: `GET /pets/:id`

Description: Retrieves a specific pet by its ID.

Headers:`Authorization: Bearer <token>`

Path Parameters: id: The unique ID of the pet.



3. Create a New Pet
Endpoint: `POST /pets/`

Description: Creates a new pet entry.

Headers: `Authorization: Bearer <token>`

Content-Type: `application/json`

Request Body:
`
{
  "name": "Buddy",
  "type": "Dog",
  "age": 5
}
`

4. Update Pet by ID

Endpoint: `PATCH /pets/:id`

Description: Updates the information of a specific pet.

Headers: `Authorization: Bearer <token>`

Content-Type: `application/json`

Path Parameters: id: The unique ID of the pet.

Request Body (Partial or Full Update):

`{
  "name": "Buddy",
  "type": "Dog",
  "age": 6
}`

5. Remove Pet by ID

Endpoint: `DELETE /pets/:id`

Description: Deletes a specific pet by its ID.

Headers: `Authorization: Bearer <token>`

Path Parameters: id: The unique ID of the pet.