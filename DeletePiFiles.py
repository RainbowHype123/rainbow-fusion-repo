# Delete π Files

import os

parentFolder = os.path.dirname(os.path.abspath(__file__))

targetFile = "π"

for root, dirs, files in os.walk(parentFolder):
    if targetFile in files:
        filePath = os.path.join(root, targetFile)
        print(f"Deleting {targetFile} in: {root}")
        print()
        os.remove(filePath)