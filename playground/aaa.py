from PIL import Image, ImageOps

# Load the original black and white logo
input_path = "a.png"
output_path = "aa.png"

# Open the image
image = Image.open(input_path)

# Invert the colors
inverted_image = ImageOps.invert(image.convert("RGB"))

# Save the result
inverted_image.save(output_path)

# Display the processed image
inverted_image.show()
