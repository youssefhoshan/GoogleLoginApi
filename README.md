# Google Login API Project

This project demonstrates how to implement Google Login using OAuth in a Node.js application. It allows users to log in with their Google accounts and displays their name and profile picture on a welcome page.

## Issues Encountered

During the development of this project, several issues were encountered and resolved:

1. **Error: "path must be absolute or specify root to res.sendFile"**
   - This error occurred when attempting to send a file using `res.sendFile()` in the Express server.
   - Solution: The issue was resolved by providing an absolute path using `path.join(__dirname, 'filename')`.

2. **Error: "Cannot GET /auth/google"**
   - This error occurred when trying to access the `/auth/google` route.
   - Solution: The issue was resolved by correcting the route path in the Express server.

3. **Difficulty displaying the user's name and profile picture**
   - Initially, there was difficulty in displaying the user's name and profile picture retrieved from Google.
   - Solution: The issue was resolved by accessing the user information from the Google API response and updating the HTML dynamically with the user's name and profile picture.

## How to Run the Project

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
git clone [https://github.com/your-username/your-repository.git](https://github.com/youssefhoshan/GoogleLoginApi/)

2. Navigate to the project directory:
cd GoogleLoginApi

npm install


4. Set up the Google API credentials:
- Go to the Google API Console (https://console.developers.google.com/).
- Create a new project and enable the Google+ API.
- Create OAuth credentials and set the authorized redirect URI to `http://localhost:3000/auth/google/callback`.
- Replace the `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` placeholders in the `server.js` file with your actual Client ID and Client Secret obtained from the Google API Console.

5. Start the server:
node server.js


6. Open your browser and go to `http://localhost:3000`.
- You should see a "Login with Google" button.
- Click on the button to initiate the OAuth flow and log in with your Google account.

7. After successful authentication, you will be redirected to the `user.html` page, where you will see your name and profile picture retrieved from Google.

Please note that this project assumes basic familiarity with Node.js and web development. If you encounter any issues or have any questions, please don't hesitate to reach out for support. This project also serves as a good starting point for learning more about OAuth and integrating Google Login into your applications.

Enjoy exploring and learning with this project!
