# 📹 Percepta – Real-Time Intrusion Detection System

**Percepta** is a full-stack web application that uses your webcam to detect unauthorized human presence in real-time. Designed with home and office security in mind, it captures video frames, logs intrusions, and sends alerts when necessary.

<img src="docs/images/percepta.png">
<img src="docs/images/dashboard.png">

---

## 🚀 Features

- 🔍 **Real-time Human Detection** using your webcam
- 🎯 **Intrusion Logging** with frame capture
- 📹 **Uploaded Video Recording** of suspicious activity

---

## 🧠 Tech Stack

### Frontend:
- React
- JavaScript
- Tailwind CSS

### Backend:
- Python
- Flask
- OpenCV

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/louisnguyenn/percepta.git
cd percepta
```

### 2. Backend Setup
```bash
cd server
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python3 app.py      # On Windows: python app.py
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

## 📬 Credits
Built by Louis Nguyen
