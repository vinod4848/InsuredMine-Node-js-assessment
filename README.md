start project (npm run dev || npm start)

File Upload:

Method: POST
URL: http://localhost:3000/file/upload
Use: Upload a file
Create User:

Method: POST
URL: http://localhost:3000/auth/users
Use: Create a new user
Request Body:
json
Copy code
{
"email": "vinod@gmail.com",
"gender": "Male",
"name": "Vinod Kumar",
"city": "Anytown",
"phone": "123-456-7890",
"address": "123 Main St",
"state": "CA",
"zip": "12345",
"dob": "1990-01-01"
}
Get All Users:

Method: GET
URL: http://localhost:3000/auth/users
Use: Get a list of all users
Get User by ID:

Method: GET
URL: http://localhost:3000/auth/users/64e5fc7864946691b9f2aa0a
Use: Get user details by user ID
Update User:

Method: PUT
URL: http://localhost:3000/auth/users/64e5fc7864946691b9f2aa0a
Use: Update user details
Request Body: Same as the "Create User" request body
Delete User:

Method: DELETE
URL: http://localhost:3000/auth/users/64e5fe0364946691b9f2aa12
Use: Delete a user by user ID
Create Agent:

Method: POST
URL: http://localhost:3000/agents/createAgent
Use: Create a new agent
Get All Agents:

Method: GET
URL: http://localhost:3000/agents/getAllAgents
Use: Get a list of all agents
Create Carrier:

Method: POST
URL: http://localhost:3000/carriers/createCarrier
Use: Create a new carrier
Request Body:
json
Copy code
{
"name": "LIC Insurance",
"address": "123 Main St",
"city": "Anytown",
"state": "CA",
"zip": "12345",
"phone": "123-456-7890",
"policies": [
{
"policyNumber": "POL123",
"policyType": "Auto",
"startDate": "2023-09-01",
"endDate": "2024-09-01",
"premium": 1000,
"coverage": "Full Coverage",
"insuredItems": ["Vehicle A", "Vehicle B"]
}
]
}
Get All Carriers:

Method: GET
URL: http://localhost:3000/carriers/getAllCarriers
Use: Get a list of all carriers
Create Policy:

Method: POST
URL: http://localhost:3000/policy/policies
Use: Create a new policy
Request Body: Same as "Create User" request body
Get All Policies:

Method: GET
URL: http://localhost:3000/policy/policies
Use: Get a list of all policies
Get Policy by ID:

Method: GET
URL: http://localhost:3000/policy/64e72b7328fcdc6ef68fe3d6
Use: Get policy details by policy ID
Update Policy:

Method: PUT
URL: http://localhost:3000/policy/64e72b7328fcdc6ef68fe3d6
Use: Update policy details
Request Body: Same as "Create User" request body
Delete Policy:

Method: DELETE
URL: http://localhost:3000/policy/64e72b7328fcdc6ef68fe3d6
Use: Delete a policy by policy ID
Create User Account:

Method: POST
URL: http://localhost:3000/account/accounts
Use: Create a new user account
Request Body:
json
Copy code
{
"userId": "64e61051a05565fe4cd45a32",
"account_type": "savings",
"account_name": "Vinod Kumar",
"accountNumber": 123456789
}
Get All User Accounts:

Method: GET
URL: http://localhost:3000/account/accounts
Use: Get a list of all user accounts
Get User Account by ID:

Method: GET
URL: http://localhost:3000/account/accounts/64e736005046dc754ffa968c
Use: Get user account details by account ID
Update User Account:

Method: PUT
URL: http://localhost:3000/account/accounts/64e736005046dc754ffa968c
Use: Update user account details
Request Body: Same as "Create User Account" request body
Delete User Account:

Method: DELETE
URL: http://localhost:3000/account/accounts/64e736005046dc754ffa968c
Use: Delete a user account by account ID
Please make sure to adjust the URLs and request bodies according to your actual application setup. If you have any specific questions or need further assistance, feel free to ask!
