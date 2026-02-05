# 🔑 Logging in to Device and Downloading the Install Script

## 1️⃣ Log in to Your Server
Access your server via SSH:

```bash
ssh user@your-server-ip
```

---

## 2️⃣ Download the Tactical RMM MeshCentral Agent Script
Use `wget` to download the installer script directly from the repository:

```bash
wget https://raw.githubusercontent.com/Nerdy-Technician/LinuxRMM-Script/refs/heads/main/rmmagent-linux.sh
```

---

## 3️⃣ Make the Script Executable
Before running it, ensure the script has execution permissions:

```bash
sudo chmod 755 rmmagent-linux.sh
```