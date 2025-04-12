# 🚀 ProductPulse - Admin Dashboard (Angular)

**ProductPulse** is a Admin Dashboard built with Angular and Chart.js. It provides a fully functional admin interface to manage clients and products, visualize data trends, secure routing using guards and CRUD functionality.

---

## 🚀 Features

### 👤 Admin Authentication
- Login and logout
- Route guard protection to restrict unauthorized access

### 🧑‍💼 Client Management
- View registered clients
- List shown in a styled table format
- Client registration trends visualized over date

### 📦 Product Management (CRUD)
- Add new products with category, quantity, price
- Edit existing products in a dialog
- Delete products and auto-update list
- View product details in a dialog
- Product list with table layout

### 📈 Dashboard Charts (via Chart.js)
- Total number of products (counter)
- Total number of clients (counter)
- Products by Category (Pie Chart)
- Client Registration Over Time (Line Chart)
- Average Price per Category (Bar Chart)

---

## 🛠️ Built With

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Chart.js](https://www.chartjs.org/)
- [JSON Server](https://github.com/typicode/json-server)

---

## 📦 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/admin-dashboard-angular.git
cd admin-dashboard-angular

Install dependencies
bash
Copy
Edit
npm install
3. Start the JSON Server
bash
Copy
Edit
npx json-server --watch db.json --port 3000
4. Run the Angular App
bash
Copy
Edit
ng serve
Open in browser: http://localhost:4200

🛡️ Route Guard Logic
Checks localStorage for "isLoggedIn"

Redirects to /login if unauthenticated

Blocks access to /home and child routes unless logged in

🗃️ CRUD Operations
Add, Edit, Delete, and View Products via ProductService

Products and clients are fetched from and saved to db.json

📊 Charts Implemented
Chart Type	Purpose
📌 Counter Cards	Total products and clients
🥧 Pie Chart	Product distribution by category
📈 Line Chart	Client registrations over time
📊 Bar Chart	Average product price by category
