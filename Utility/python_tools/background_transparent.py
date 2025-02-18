from PIL import Image

def make_background_transparent(input_path, output_path, color_to_remove=(255, 255, 255), tolerance=150):
    """
    Makes the specified background color transparent in a PNG image.
    
    :param input_path: Path to the input image
    :param output_path: Path to save the output image
    :param color_to_remove: RGB color to remove (default is white: (255, 255, 255))
    :param tolerance: Tolerance level for color matching
    """
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        r, g, b, a = item
        
        if (abs(r - color_to_remove[0]) <= tolerance and
            abs(g - color_to_remove[1]) <= tolerance and
            abs(b - color_to_remove[2]) <= tolerance):
            new_data.append((r, g, b, 0))  # Set alpha to 0 (transparent)
        else:
            new_data.append(item)
    
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

# Example usage
make_background_transparent("/Users/yumengzhou/Documents/GitHub/Expert_system/Utility/python_tools/ss.png", "/Users/yumengzhou/Documents/GitHub/Expert_system/Utility/python_tools/lanzai.png") 