# Production Management System

A full-stack production management system that calculates the maximum possible product manufacturing based on available raw materials.

This project simulates a simplified production/ERP logic where products depend on raw materials and the system suggests the most profitable production based on current stock.

# Tech Stack

## Frontend

Next.js

TypeScript

TailwindCSS

Axios

## Backend

Node.js

Express

TypeScript

PostgreSQL

## Features

CRUD for Products

CRUD for Raw Materials

Product ↔ Raw Material relationship management

Production capacity calculation

Profit-based production suggestions

# Production Logic

For each product, the system calculates:
available_quantity / required_quantity

The lowest result among required materials determines the maximum production capacity.

The total potential revenue is calculated as:
max_production * unit_value

# Database Tables

products

raw_materials

product_raw_materials

# Created By

Matheus Alves 