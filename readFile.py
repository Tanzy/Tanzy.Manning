import json
import os

# get list of files in the sampleFiles folder
files = os.listdir('sampleFiles')

for file in files:
    if file.endswith('.json'):
        with open(os.path.join('sampleFiles', file)) as f:
            data = json.load(f)
            print(f"Contents of {file}:")
            print(data)


