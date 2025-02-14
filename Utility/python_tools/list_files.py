"""
For some LLM question, we need to provide the files structure so it can know what scripts we have 
and guide us which file to look at, or based on the file structure to guide us cd to which folder
and run what command

"""


import os

# def print_directory_structure(path, indent=0):
#     """
#     Recursively prints the directory structure.
    
#     :param path: Directory path to list.
#     :param indent: Indentation level (for formatting).
#     """
#     try:
#         # List all files and directories in the given path
#         items = os.listdir(path)
        
#         for item in items:
#             item_path = os.path.join(path, item)
#             if os.path.isdir(item_path):
#                 # If it's a directory, print it and recurse into it
#                 print('  ' * indent + f"[DIR] {item}")
#                 print_directory_structure(item_path, indent + 1)
#             else:
#                 # If it's a file, just print the file name
#                 print('  ' * indent + f"[FILE] {item}")
#     except PermissionError:
#         print('  ' * indent + f"[ERROR] Permission Denied: {path}")
#     except FileNotFoundError:
#         print('  ' * indent + f"[ERROR] Path Not Found: {path}")




def print_directory_structure(path, indent=0, level=None, omit=False):
    """
    Recursively prints the directory structure up to a specified depth.
    
    :param path: Directory path to list.
    :param indent: Indentation level (for formatting).
    :param level: Maximum depth to recurse. If None, no limit is applied.
    :param omit: If True, summarizing similar files when more than 5 exist.
    """
    if level is not None and indent >= level:
        return  # Stop recursion if the maximum depth is reached
    
    try:
        items = os.listdir(path)
        file_counts = {}
        
        for item in items:
            item_path = os.path.join(path, item)
            if os.path.isdir(item_path):
                print('  ' * indent + f"[DIR] {item}")
                print_directory_structure(item_path, indent + 1, level, omit)
            else:
                ext = os.path.splitext(item)[-1]
                if omit:
                    file_counts[ext] = file_counts.get(ext, 0) + 1
                else:
                    print('  ' * indent + f"[FILE] {item}")
        
        if omit:
            for ext, count in file_counts.items():
                if count > 5:
                    print('  ' * indent + f"[FILE] many{ext}")
                else:
                    for item in items:
                        if os.path.splitext(item)[-1] == ext:
                            print('  ' * indent + f"[FILE] {item}")
    except PermissionError:
        print('  ' * indent + f"[ERROR] Permission Denied: {path}")
    except FileNotFoundError:
        print('  ' * indent + f"[ERROR] Path Not Found: {path}")

# Example usage: Provide the path you want to explore
directory_path = "/Users/wenqings/Desktop/Expert_system/open-webui/src/routes/(app)"  # Change this to your target path
print_directory_structure(directory_path, level=3, omit=True)
