# Sekawan Vehicle
For Back-end Technical Test @ Sekawan Media
# Prerequisite
- PHP 8.2.19 (gd, zip, mysqli, pdo_mysql)
- Node 20.13.1
- NPM 10.5.2
- MSQL 8.0.30
- Laravel 11.0
# Install
- Install Composer dependencies
```
composer install
```
- Copy environment file
```
cp .env.example .env
```
- Adjust database credential (if needed)
```
DB_DATABASE=sekawan_vehicle_dev
DB_USERNAME=root
DB_PASSWORD=root
```
- Generate APP_KEY
```
php artisan key:generate
```
- Migrate database and run seeder
```
php artisan migrate --seed
```
- Install Node dependencies
```
npm install
```
- Run Vite dev server on another terminal
```
npm run dev
```
- Run Laravel server
```
php artisan serve
```
## Available Demo Users
All user uses `password` as their password
### Admin
```
admin@test.com
```
### Manager
```
manager1@test.com
```
```
manager2@test.com
```
### Driver
```
driver1@test.com
```
```
driver2@test.com
```
### Employee
```
employee1@test.com
```
```
employee2@test.com
```
```
employee3@test.com
```
# Requirement Checklist
- [x] Two role or more
- [x] Admin can assign driver and approver
- [x] Need approval from two levels
- [x] Approval can approve from this application
- [x] Vehicle usage chart
- [x] Export reservation as Excel
- [x] README.md
- [x] Physical Data Model (dbdiagram.io)
- [x] Activity Diagram (draw.io)
- [x] Log on reservation flow
- [x] Responsive design
# Application Flow
Please refer to https://drive.google.com/file/d/1rm6A1AQfA4gspYiyxKBuegpevXQGmdPa/view?usp=sharing
- Employee create a reservation
- Admin assign manager and driver to that reservation
- Manager accept the reservation
- Admin and Manager can choose to reject the reservation
# Database Structure
Please refer to https://dbdiagram.io/d/sekawan-vehicle-664ccae6f84ecd1d22c5f739
