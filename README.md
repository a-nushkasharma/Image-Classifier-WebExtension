# Image Classifier Web Extension
A lightweight, browser-based image classifier that identifies objects in images as you browse the web. Powered by machine learning models and integrated seamlessly into your browser experience.

## 🚀 Features
🔍 Hover-to-Classify: Automatically classifies images on hover.

🧠 ML-Powered: Uses a pretrained TensorFlow.js model to detect objects in real-time.

📦 Minimal & Fast: Built with Vite for blazing-fast loading and bundling.

🧩 Browser Extension: Compatible with Chrome and other Chromium-based browsers.

💬 Tooltip Labels: Displays classification labels and confidence scores above images.
---
## 🧪 How It Works
- On page load, the extension scans for <img> tags.

- When the user hovers over an image:

- The image is sent to the classifier.

- A prediction label (e.g., “dog”, “car”, “cat”) and confidence score are shown.

- The label is rendered using a styled tooltip.
---
## Tech-Stack 

| Technology                | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| **JavaScript (ES6+)**     | Core scripting language for extension logic                  |
| **TensorFlow\.js**        | In-browser machine learning model inference                  |
| **Vite**                  | Fast frontend build tool for bundling and development        |
| **Chrome Extensions API** | Used to inject content scripts and manage extension behavior |
| **HTML + CSS**            | For UI structure and tooltip styling                         |
---
## Model Used
The extension uses the MobileNet model from TensorFlow.js, a lightweight and efficient convolutional neural network designed for mobile and browser environments.

| Property              | Description                                      |
| --------------------- | ------------------------------------------------ |
| **Model Name**        | MobileNet v1 (pretrained on ImageNet)            |
| **Framework**         | TensorFlow\.js                                   |
| **Model Size**        | \~16 MB (quantized)                              |
| **Input Resolution**  | 224x224 pixels                                   |
| **Number of Classes** | 1000 (based on the ImageNet dataset)             |
| **Performance**       | Real-time inference optimized for in-browser use |

### ⚙️ How It's Used
On image hover, the extension:

Resizes the image to the required input dimensions (224x224).

Feeds it into the MobileNet model.

Retrieves the top prediction and confidence score.

Displays this information via a styled tooltip.

### ✅ Why MobileNet?
⚡ Fast inference: Works smoothly even on low-power devices.

📦 Small model size: Ideal for browser extensions with size constraints.

🔧 Pretrained & easy-to-integrate: Ready to use with minimal setup using TensorFlow.js.


---
## 📁 Project Structure
```bash
image-classifier-extension/
├── public/                # Static assets
├── src/
│   ├── assets/            # Icons, logos
│   ├── content.js         # Main classifier logic injected into pages
│   ├── popup.html         # Optional popup for extension UI
│   ├── popup.js           # Logic for popup
│   └── styles.css         # Tooltip and layout styles
├── manifest.json          # Extension manifest file
├── vite.config.js         # Vite configuration
└── package.json           # Project metadata and dependencies
```
---
## 📦 Installation (Development Mode)
1.Clone the repository
```bash
git clone https://github.com/yourusername/image-classifier-extension.git
cd image-classifier-extension
```
2.Install Dependencies
```bash
npm install
```
3.Build extension
```bash
npm run build
```
4.Load in Chrome
