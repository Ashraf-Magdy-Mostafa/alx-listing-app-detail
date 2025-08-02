# 🏡 ALX Listing App

A responsive real estate property listing application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This is part of the **ALX SE capstone project** designed to help users discover vacation properties based on filters such as location, amenities, and ratings.

---

## 📌 Project Overview

### 🎯 Goal
Build a dynamic, responsive property listing page that implements the following:
- A layout structure with `Header`, `Footer`, and `Layout` components
- A hero section with a mission statement
- A filter section with reusable `Pill` components
- A listing grid displaying property cards from a sample dataset


---

## ✨ Features

- 🔧 **Reusable Components** (Pill, Layout, Header, Footer)
- 🎯 **Filters with dynamic UI state** using click-to-select functionality
- 🖼️ **Image-rich property listings**
- 💡 **Responsive layout** for mobile and desktop users
- 🚀 **Tailwind CSS** for utility-based styling
- 🔁 **Sample data rendering** with TypeScript interface validation

---

## 📁 Project Structure
<pre>

alx-listing-app-00/
├── components/
│ ├── layout/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ └── Layout.tsx
│ └── Pill.tsx
├── constants/
│ └── index.ts # Sample property listing data
├── interfaces/
│ └── index.ts # TypeScript interface for property type
├── pages/
│ ├── _app.tsx
│ └── index.tsx # Home page with search, filters & listing grid
├── styles/
│ └── globals.css
├── public/
├── README.md
└── tsconfig.json
</pre>

## 🎨 Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React Hooks (`useState`)
- Static Data JSON

---