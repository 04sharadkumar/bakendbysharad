# Chai and Backend

# Professional Structure----------

<!-- 

1.controllers : 

2.DB         :It is used how database can be connect

3. middlewares:mere pas ik request aayi ki server se kuch do aur may bich me middleware laga dunga taki may app ki cookies dekh saku 

4.models:  it is used to make the differents type of schema related to the project for example hospital management , libraary management

5.routes:  make a standard approach to manage different routes

6.utility: files uploading ,mails uploading etc use for make aur jo functionality bar bar use hogi usko q na ik folder me rakh diya jaye
 -->

# How to commit with command---------

<!-- 
 1.git status 

 2.git add .

 3.git commit -m "write comment the you change in the code"

 4.git push

 -->

 #MONGO_DB setup

 #INSTALL : npm i mongoose express dotenv
 <!-- 
 
 How mongoose connect with database
         
       const mongoose = require('mongoose')
       mongoose.connect('mongodb+srv://sharad:sharad123@codefile.iovnn.mongodb.net')  

       Note: 

       1.Database se jab bhi bat karne ki kosis karunga to problem aa sakti hy so raape in try and catch  OR take Promises aur promisese me bhi resolve ho jati hy by resolve and reject

       2.Database is always in other content (means jab bhi database ko access karoge to time lega islye   "async aur await ka use karo")

 
  -->