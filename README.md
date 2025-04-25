# QTechy Backend

A Node.js backend built with Express and MongoDB for **Authentication** and **Product Management**.


## 🚀 Features

- User Authentication (Register, Login, Logout)
- Role-Based Access Control (Admin/User)
- Admins can **add products**
- Product List with:
  - Pagination
  - Search by name
  - Sorting (price low-high, rating high-low)
- Protected routes using JWT authentication
- Clean and modular folder structure
- Environment variable management with `.env`


-----
## 📌 Technologies Used
* Node.js
* Express.js
* MongoDB + Mongoose
* JSON Web Tokens (JWT)
* bcryptjs
* dotenv
* nodemon


---

## 📂 Project Structure

- **backend/** - Main project folder containing the backend application.
  - **src/** - Source code directory for the backend services.
    - **controllers/** - Handle the logic for authentication and product operations.
    - **models/** - Define MongoDB schemas for User and Product.
    - **routes/** - Define API endpoints for Auth and Product modules.
    - **middlewares/** - Manage authentication and authorization (admin-only access).
    - **utils/** - Utility functions (e.g., JWT token generation).
    - **app.js** - Main server setup and route mounting.
  - **.env** - Environment variables file to configure secrets and database connection.
  - **package.json** - Project dependencies, scripts, and metadata.
  - **README.md** - Project documentation and setup instructions.

---

## 🛠 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/qtechy-backend.git
```
### 2 
```
cd qtechy-backend
```
### 3. Install dependencies
```
npm install
```
### 4. create environment variables root directory

```
cp .env
```
Then update the following values:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/qtechydb
JWT_SECRET=your_secret_key_here
```
Make sure MongoDB is running locally or update MONGO_URI if using cloud.

### 5. Start the server

```
npm run dev
```

-----


