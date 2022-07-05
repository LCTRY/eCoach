
backend dependency:
1. npm i express dotenv mongoose colors
2. npm install --save express-async-handler
3. npm i bcryptjs
4. npm i jsonwebtoken

globe dev dependency:
1. npm i -D nodemon

package.json:
1.  "start": "node backend/server.js",
    "server": "nodemon backend/server.js"
2.  "client": "npm start --prefix frontend"

root:
1. npx create-react-app frontend --template redux

frontend:
1. npm i react-router-dom
2. npm i react-icons
3. npm i axios
4. npm i react-toastify
5. npm install --save @fullcalendar/react @fullcalendar/daygrid
6. npm install --save moment
