import express, {json} from "express"
import morgan from "morgan"
import StudentRoutes from "./routes/Student.Routes"


//initilization
const app = express()

//middleware
app.use(morgan("dev"))
app.use(json())


//routes
app.use("/student", StudentRoutes)

//settings
app.set("port", 4000)
app.listen(app.get("port"))
console.log(`Server on port ${app.get("port")}`)

