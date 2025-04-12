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
cd productform
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the JSON Server
```bash
npx json-server --watch db.json --port 3000
```

### 4. Run the Angular App
```bash
ng serve
```

---

### 🛡️ Route Guard Logic
- Checks localStorage for "isLoggedIn"
- Redirects to /login if unauthenticated
- Blocks access to /home and child routes unless logged in

---


### 🗃️ CRUD Operations
- Add, Edit, Delete, and View Products via ProductService
- Products and clients are fetched from and saved to db.json

---

### 📷 Screenshots
1. Login Page
![image](https://github.com/user-attachments/assets/f7e184fe-6589-4459-bf19-bd42d556fddd)

2. Dashboard Page
![Screenshot 2025-04-12 231543](https://github.com/user-attachments/assets/20b9bbf2-f796-4d87-acef-748f5e7259dd)


3. Add Product
![image](https://github.com/user-attachments/assets/7d8300e1-5684-46f9-bf12-8e1cf5a14347)

