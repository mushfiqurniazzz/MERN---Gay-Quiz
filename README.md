<h1>MERN - Gay Quiz</h1>
<p>This MERN app allows users to answer few questions and finally be able to know about their feelings. It uses MongoDB as the database to store questions and answers, Express.js for handling server-side logic, React.js for building the user interface, and Node.js for server-side runtime environment. The app provides a seamless experience for users to finally know if they are gay or not.</p>
<h3>Running the Project Locally</h3>
  <p>To run this project on your local machine, follow these steps:

1. <b>Clone the Repository</b>: Clone this repository to your local machine:

    git clone <repository_url>

2. <b>Navigate to Project Directory</b>: Move into the project directory:

    cd <project_directory>

3. <b>Install Dependencies</b>: Install the necessary dependencies using npm or yarn:

    npm install

    or

    yarn

4. <b>Setup Environment Variables</b>: Create a `.env` file in both frontend and server of your project directory and add the following variables:

    MONGODB_URI=your_mongodb_uri
    PORT=5000
    CLIENT_PORT=3000

    Replace `your_mongodb_uri` with your MongoDB connection URI. Customize the `PORT` and `CLIENT_PORT` variables if needed.

    and in the client .env file add the VITE_REACT_APP_SERVER_HOSTNAME same as the server running addres.

    and dont forget to send a post request on the api/questions in postman or else there won't be any questions or answers when trying to run the frontend

5. <b>Start the Development Server</b>: Run the following command to start the development server:

    npm start

6. <b>Access the App</b>: Open your web browser and navigate to `http://localhost:5173` to access the app. You can now use the app locally on your machine, connected to your MongoDB database using the URI specified in the `.env` file.
</p>