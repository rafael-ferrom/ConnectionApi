# 🚀 Connection API

A project built to demonstrate different approaches to consuming APIs on the front-end using **React + TypeScript + Vite**.

This application implements a full **CRUD (Create, Read, Update, Delete)** using the JSONPlaceholder API, showcasing multiple strategies widely used in modern front-end development.

---

## 🎯 Purpose

The main goals of this project are:

* Compare different API consumption approaches
* Implement a complete CRUD flow
* Demonstrate clean architecture and best practices
* Highlight differences between manual and automated state management
* Serve as a portfolio and learning project

---

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* Redux Toolkit
* RTK Query
* Axios
* Fetch API

---

## 🔌 Implemented Approaches

The same CRUD functionality is implemented using different techniques:

### 🔹 Fetch API

* Native browser API
* Manual handling of loading, error, and state
* No built-in caching

### 🔹 Axios

* External HTTP client
* Cleaner syntax and response handling
* Support for interceptors

### 🔹 createAsyncThunk (Redux Toolkit)

* Global state management
* Explicit handling of loading and error states
* More verbose structure

### 🔹 RTK Query

* Automatic caching and data synchronization
* Built-in loading and error handling
* Minimal boilerplate
* Automatic updates after mutations

---

## 📊 Comparison Table

| Approach  | External Library | Auto Cache | Auto Loading | Suitable for Large Apps | Learning Curve |
| --------- | ---------------- | ---------- | ------------ | ----------------------- | -------------- |
| Fetch     | ❌                | ❌          | ❌            | ❌                       | 🟢 Low         |
| Axios     | ✅                | ❌          | ❌            | ❌                       | 🟢 Low         |
| Thunk     | ✅                | ❌          | ❌            | ✅                       | 🟡 Medium      |
| RTK Query | ✅                | ✅          | ✅            | ✅                       | 🔴 High        |

---

## 🔁 Features (CRUD)

* 📥 **GET** – fetch and display data
* ➕ **POST** – create new items
* ✏️ **PUT/PATCH** – update existing data
* ❌ **DELETE** – remove items

---

## ⚠️ About the API

This project uses **JSONPlaceholder**, a fake REST API for testing.

> Write operations (POST, PUT, DELETE) are simulated and not persisted on the server.

To handle this behavior:

* The application updates state locally
* The UI reflects changes as if they were persisted
