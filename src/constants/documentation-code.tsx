export const nodejs = `const axios = require('axios');

let data = JSON.stringify({
  "text1": "First Text",
  "text2": "Second Text"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api-fortress-five.vercel.app/api/v1/similarity',
  headers: { 
    'Authorization': 'YOUR_API_KEY', 
    'Content-Type': 'application/json', 
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});`;

export const python = `import requests
import json

url = "https://api-fortress-five.vercel.app/api/v1/similarity"

payload = json.dumps({
  "text1": "First Text",
  "text2": "Second Text"
})
headers = {
  'Authorization': api_key,
  'Content-Type': 'application/json',
  'token': 'YOUR_API_KEY'
}

response = requests.request("POST", url, headers=headers, data=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
