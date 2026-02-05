Now that you have collected **all required variables** from the previous steps, you can run the install.

---

## 1️⃣ Log in to Your Server
Use SSH to connect to your server:

```bash
ssh user@hostname
```

> 💡 If you’ve changed your SSH port, use `-p PORT`:
> ```bash
> ssh -p 2222 user@hostname
> ```

---

## 2️⃣ Verify the Install Script Exists
Check that `rmmagent-linux.sh` is still in your current directory from **Step 1**:

```bash
ls
```

You should see `rmmagent-linux.sh` in the output. If not, re-download it.

---

## 3️⃣ Identify Your Agent Type
Decide whether this machine will be installed as a:
- **`server`**  
- **`workstation`**

---

## 4️⃣ Run the Install Command
Use the format below, replacing values with the **MeshCentral URL**, **RMM API URL**, **Client ID**, **Site ID**, **Auth Token**, and **Agent Type** you collected earlier.

**Example:**

```bash
sudo bash rmmagent-linux.sh install "https://mesh.example.com/meshagents?[RANDOM_KEY]" "https://rmm-api.example.com" 4 7 e88a2b5b1f6587e3bdf811f30043a083200cb5f4fcae2c5936870352b8133df5 server
```

---

## 5️⃣ Verify Installation
A successful installation will produce output similar to:

```bash
Installing tacticalagent service...
INFO[0000] Adding agent to dashboard
WARNING: Unable to read board_asset_tag: open /sys/class/dmi/id/board_asset_tag: no such file or directory
WARNING: Unable to read board_serial: open /sys/class/dmi/id/board_serial: no such file or directory
WARNING: Unable to read board_vendor: open /sys/class/dmi/id/board_vendor: no such file or directory
WARNING: Unable to read board_version: open /sys/class/dmi/id/board_version: no such file or directory
WARNING: Unable to read board_name: open /sys/class/dmi/id/board_name: no such file or directory
INFO[0007] Installation was successful!
Allow a few minutes for the agent to properly display in the RMM
Created symlink /etc/systemd/system/multi-user.target.wants/tacticalagent.service → /etc/systemd/system/tacticalagent.service.
tacticalagent service installed and started.
Tactical Agent Install is done
```

---

## 6️⃣ Post-Install Checks
- Ensure your device appears in **Tactical RMM** and **MeshCentral**.
- Confirm both services are running:

```bash
systemctl status tacticalagent
systemctl status meshagent
```

✅ Installation complete!
