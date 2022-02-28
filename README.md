# Microsoft Engage 2021

This project is built using Azure Communication Services. This project requires node.js.

Steps to execute the code
1. Clone this repository.
2. Add the following packages:
    1. npm install --save @azure/communication-identity
    2. npm install --save @azure/communication-common
    3. npm i --save-dev @types/uuid
    4. npm install --save @azure/communication-react@1.0.0-beta.1
3. Get the Connection String from the Azure portal.( For this create a Communication Service and Resource Group)
4. Add the connection String in the line 33 of App.tsx in src.
5. npm run start


First enter the name in the page.
Screenshot 2021-07-13 at 9.52.47 PM<img width="1552" alt="Screenshot 2021-07-13 at 9 52 47 PM" src="https://user-images.githubusercontent.com/83347010/125503087-283cea13-ead9-4edd-9d90-94943b68dd60.png">

Next click join call.
Screenshot 2021-07-13 at 9.53.03 PM<img width="1552" alt="Screenshot 2021-07-13 at 9 53 03 PM" src="https://user-images.githubusercontent.com/83347010/125503164-41fccb65-9e5f-4abb-9ed7-4fa9ce7c20af.png">

Click start call.
Copy the link and share it with other participants to join.
Screenshots for multiple participants:
Screenshot 2021-07-07 at 6.10.52 PM<img width="1312" alt="Screenshot 2021-07-07 at 6 10 52 PM" src="https://user-images.githubusercontent.com/83347010/125503260-3e6377c5-1d7d-430a-8950-9235cb9e0338.png">

Screenshot 2021-07-07 at 6.09.43 PM<img width="1312" alt="Screenshot 2021-07-07 at 6 09 43 PM" src="https://user-images.githubusercontent.com/83347010/125503317-6b525faf-6a1f-42a4-a368-2d2c5a960850.png">


I have implemented the following features:
1. Toggle microphone
2. Toggle video
3. Select the devices from the list
4. Connect multiple participants through video conferencing
5. Sharescreen 
