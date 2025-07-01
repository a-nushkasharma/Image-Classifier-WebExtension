import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

// Load image with CORS support
const loadImageWithCORS = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Image load failed: ' + src));
  });
};

// Classify image and return top label
const classifyImage = async (imgEl, model) => {
  try {
    const corsImg = await loadImageWithCORS(imgEl.src);
    const predictions = await model.classify(corsImg);
    return predictions?.[0]?.className || null;
  } catch (err) {
    console.warn('❌ Skipped (CORS or load error):', imgEl.src);
    return null;
  }
};

// Main logic
(async () => {
  console.log('⏳ Loading model...');
  const model = await mobilenet.load();
  console.log('✅ MobileNet loaded');

  const images = document.querySelectorAll('img');

  for (const imgEl of images) {
    if (!imgEl.complete || imgEl.naturalWidth === 0) continue;

    const label = await classifyImage(imgEl, model);
    if (!label) continue;

    // Create wrapper div with relative position
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';

    // Insert wrapper before the image
    imgEl.parentNode.insertBefore(wrapper, imgEl);
    wrapper.appendChild(imgEl);

    // Create label div (hidden by default)
    const labelDiv = document.createElement('div');
    labelDiv.innerText = label;

    Object.assign(labelDiv.style, {
      position: 'absolute',
      top: '4px',
      left: '4px',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      color: 'white',
      padding: '4px 8px',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '5px',
      display: 'none',
      zIndex: 10
    });

    // Show label on hover
    wrapper.addEventListener('mouseenter', () => {
      labelDiv.style.display = 'block';
    });
    wrapper.addEventListener('mouseleave', () => {
      labelDiv.style.display = 'none';
    });

    wrapper.appendChild(labelDiv);
  }
})();
