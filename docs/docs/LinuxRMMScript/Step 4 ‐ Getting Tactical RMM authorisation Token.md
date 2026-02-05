## 1️⃣ Log in to Tactical RMM
If you are **already logged in** from the previous step, continue.  
If not, log in to your **Tactical RMM instance**.

Once logged in, your dashboard will appear similar to this:

![Tactical RMM Dashboard](https://github.com/user-attachments/assets/4b2a4fe8-f9d9-49a6-a2cc-d36eac2b0031)  

*(Your client and site list will be on the left-hand side — hidden in this example.)*

---

## 2️⃣ Open the Agent Installation Page
1. Go to **`Agents`** ➡️ **`Install Agents`**.  
2. You should see a screen like this:

![Install Agents Page](https://github.com/user-attachments/assets/c500f46b-ef65-4f30-afe2-b64ac9c5b315)

---

## 3️⃣ Select Client, Site, and Install Options
1. Select **any client and site** — the actual selection does not matter here, as we only need the token.  
2. Choose the same options shown below:

![Agent Install Options](https://github.com/user-attachments/assets/5bc5d266-2c50-49d4-89fd-5062ac2f3879)

> ⚠ **Set the Token Expiry** to your own preference.

---

## 4️⃣ View the Manual Installation Instructions
Click **`Show manual installation instructions`**.  
A command box will appear similar to this:

```bash
tacticalagent-v2.9.1-windows-amd64.exe /VERYSILENT /SUPPRESSMSGBOXES && ping 127.0.0.1 -n 5 && "C:\Program Files\TacticalAgent\tacticalrmm.exe" -m install --api https://rmm-api.example.com --client-id 4 --site-id 7 --agent-type workstation --auth e88a2b5b1f6587e3bdf811f30043a083200cb5f4fcae2c5936870352b8133df5
```

---

## 5️⃣ Extract the Auth Token
From the command above, **the only value you need** is the long key after the `--auth` flag.  

**Example:**  

- **Auth Token:**  
  ```
  e88a2b5b1f6587e3bdf811f30043a083200cb5f4fcae2c5936870352b8133df5
  ```
  *(Example key shown — not valid.)*

---

✅ At this point, you now have:
- **Client ID**  
- **Site ID**  
- **Auth Token**

Only **one final step** remains in the installation process.
