import json
from datetime import datetime

# Define the file path
file_path = '/workspaces/Tanzy.Manning/sampleFiles/Writing for Developers.json'

# Read the JSON file
with open(file_path, 'r') as file:
    data = json.load(file)

# Transform the data to Readwise API format
readwise_data = {
    "highlights": []
}

for item in data["scrapbookItems"]:
    for highlight in item["highlights"]:
        readwise_data["highlights"].append({
            "text": highlight["text"],
            "title": item["title"],
            "author": "Unknown",  # Add author if available
            "source_type": "book",
            "source_url": item["link"],
            "highlighted_at": datetime.strptime(item["dateCreated"], "%Y-%m-%dT%H:%M:%S%z").isoformat(),
            "note": item.get("text", ""),
            "location_type": "order",
            "location": item["bookElementOrdinal"],
            "location_order": item["bookElementOrdinal"],
            "color": highlight["color"]
        })

# Print the transformed data to verify
print(json.dumps(readwise_data, indent=4))

# Optionally, save the transformed data to a new JSON file
output_file_path = '/workspaces/Tanzy.Manning/sampleFiles/Writing_for_Developers_Readwise.json'
with open(output_file_path, 'w') as output_file:
    json.dump(readwise_data, output_file, indent=4)
