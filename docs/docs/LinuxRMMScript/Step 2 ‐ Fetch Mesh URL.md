## 1️⃣ Log in to MeshCentral
Log in to your MeshCentral panel using the credentials generated during your **Tactical RMM** installation. 

⚠️  This will often be random name if you see something like admin_1 or your TRMM Usernme you must log out and use mesh default details ⚠️ 

![MeshCentral Login](https://github.com/user-attachments/assets/00dc0ed5-c3de-4a51-9802-c4c9822d7fdc)

---

## 2️⃣ Add a New Agent
1. Navigate to the **`Tactical RMM`** group.  
2. Click **`Add Agent`**.  
3. Set the following options:

   | Setting                | Value                                         |
   |------------------------|-----------------------------------------------|
   | **Operating System**   | `Linux / BSD / macOS Binary Installer`        |
   | **System Type**        | `Linux x86-64`                                |
   | **Installation Type**  | `Background and Interactive`                  |

---

## 3️⃣ Review the Installation Command
After selecting the options above, you should see a window similar to this:  

![MeshCentral Add Agent](https://github.com/user-attachments/assets/99ffc0db-53df-4334-bb9a-171d19852e0a)

The command displayed will look like:  

```bash
wget -O meshagent "https://mesh.example.com/meshagents?id=YOUR_KEY&installflags=0&meshinstall=6"
```


---

## ⚠ Important Notes
> - **`YOUR_KEY`** is **unique** to your MeshCentral installation.  
>   **Never** share this key publicly.  
> - For Tactical RMM integration, you only need the base download URL:  

```plaintext
https://mesh.example.com/meshagents?id=YOUR_KEY
```