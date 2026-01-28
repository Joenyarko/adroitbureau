# HOW TO RUN - Adroit Bureau CMS

This is a PHP/MySQL application. You cannot run it by double-clicking index.php. 
You need a local web server (like XAMPP, WAMP, or Laragon).

## Prerequisite: Install XAMPP
1. Download XAMPP from https://www.apachefriends.org/index.html
2. Install it (Default location: C:\xampp)
3. Open "XAMPP Control Panel" and click "Start" for both **Apache** and **MySQL**.

## Step 1: Place Files
1. Move the entire `Adroit-website` folder into your XAMPP `htdocs` folder.
   - New Path: `C:\xampp\htdocs\Adroit-website\`

## Step 2: Setup Database
1. Open your browser and go to: `http://localhost/phpmyadmin`
2. Click "New" on the left sidebar.
3. Database name: `adroit_cms`
4. Click "Create".
5. Click on the new `adroit_cms` database on the left.
6. Click the "Import" tab at the top.
7. Click "Choose File" and select the `database.sql` file from your project folder.
8. Click "Go" at the bottom right.

## Step 4: Update Database for Translations (i18n)
1. In phpMyAdmin, select `adroit_cms`.
2. Click the "Import" tab.
3. Select `migration_i18n.sql` from the project folder.
4. Click "Go".

## Step 5: Run the Website
- **Public Frontend**: `http://localhost/Adroit-website/`
- **Admin Panel**: `http://localhost/Adroit-website/admin/login.php`

## Login Credentials
- **Username**: admin
- **Password**: admin123
