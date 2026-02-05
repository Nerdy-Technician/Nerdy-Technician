## 1️⃣ Log in to Your Tactical RMM Instance
Open your Tactical RMM instance (e.g. `https://trmm.example.com`) and log in with your account credentials.

![Tactical RMM Login](https://github.com/user-attachments/assets/b838e2fb-8ddf-42be-9357-4c57a3e8c900)

---

## 2️⃣ Locate the Client ID
1. Find the **Client** you want to install the agent under.  
2. **Hover** over the client name — the URL in your browser’s status bar will contain the client ID.  

In this example, the **Client ID** is `4`:

![Client ID Example](https://github.com/user-attachments/assets/c8e37b40-385a-47a4-a3a3-9d3b548c4c57)

---

## 3️⃣ Locate the Site ID
1. Inside that client, find the **Site** where the agent will be installed.  
2. **Hover** over the site name — again, the URL in your browser’s status bar will contain the site ID.

In this example, the **Site ID** is `7`:

![Site ID Example](https://github.com/user-attachments/assets/cde514e5-ad6a-4643-b4c5-764c5f62d7a2)

---

## 4️⃣ Record Your IDs
You should now have **two values** ready for your installation:

- **Client ID:** `4`
- **Site ID:** `7`

You will need these values when running the installation script in that order $clientid $siteid
