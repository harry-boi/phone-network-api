📞 Phone Network Identifier API
A simple Node.js and Express API that identifies the network provider (e.g., Airtel, MTN, Glo, 9mobile) based on a Nigerian phone number.

🚀 Features
Identify Network Providers: Accepts a phone number as input and returns the corresponding network provider.
Fast and Lightweight: Built with Express for optimal performance.
Validates Input: Ensures the phone number format is valid (11 digits).
🛠️ Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/phone-network-api.git
cd phone-network-api
Install dependencies:

npm install
Run the server:

node app.js

📡 API Endpoints
Get Network Provider
Retrieve the network provider for a given phone number.

Endpoint: /network/:phoneNumber
Method: GET
Parameters:
:phoneNumber (string): The 11-digit Nigerian phone number to query.
Example Request:
http

GET /network/09023456633 HTTP/1.1
Host: localhost:3000

Example Response:
json

{
"phoneNumber": "09023456633",
"network": "Airtel"
}
Error Response:
If the phone number is invalid:

json

{
"error": "Invalid phone number format."
}

🛠️ Future Improvements
Add more country support by expanding the prefix database.
Integrate a database to handle larger datasets.
Add rate-limiting to prevent abuse.
