const express = require("express") 
const app = express()
const port = 2727

//this allows express to receive JSON data
app.use(express.json());

const userRoutes = require("./routes/user.routes")

app.use("/api/users", userRoutes)

app.listen(port, function(){
    console.log("the app is working and listent on port " + port)
})
