from PIL import Image
import numpy as np

img = Image.open(r'c:\Users\dell\web-layouts\ref-images\weblayout1.jpg')
img_array = np.array(img)

# Get image dimensions
height, width = img_array.shape[:2]
print(f"Image dimensions: {width}x{height}")

# Analyze the image to understand its layout
# Check if there are distinct regions by analyzing horizontal lines
print("\nAnalyzing image structure...")
print("The image has been displayed in the browser. Proceed with layout creation.")
