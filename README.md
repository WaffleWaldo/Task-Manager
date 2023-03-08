# TaskManager Fullstack App

This is a fullstack task manager app built using HTML, CSS, JS, Node.js, Express, and MongoDB. The app provides a simple interface to perform full CRUD (Create, Read, Update, Delete) operations for tasks.

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install all the dependencies.
3. Rename the `.env.example` file to `.env` and update the variables with your MongoDB connection details.
4. Run `npm start` to start the app.

## Usage

Open your browser and go to `http://localhost:5000` to view the app. The homepage displays all the tasks in the database. You can add a new task by clicking the "Add Task" button, which will take you to a form where you can enter the details of the new task.

Once a task is added, you can edit or delete it by clicking the corresponding buttons in the table.

## API Endpoints

The app has the following API endpoints:

- GET /api/tasks - Returns all tasks in the database.
- POST /api/tasks - Creates a new task.
- GET /api/tasks/:id - Returns a specific task by ID.
- PUT /api/tasks/:id - Updates a specific task by ID.
- DELETE /api/tasks/:id - Deletes a specific task by ID.

## Testing

The app has been tested using Postman to ensure that all the API endpoints are functioning correctly.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)