import json
import os


# Get data function
def getFileData(files):

    filesData = []

    for file in files:
        if file.endswith('.json'):
            with open(os.path.join('sampleFiles', file)) as f:
                filesData.append(json.load(f))

    return filesData



# get list of files in the sampleFiles folder
files = os.listdir('sampleFiles')

highlights = getFileData(files)

# list data that is contained in fileData
for data in highlights:
    print(data)