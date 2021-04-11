import {Router} from "express"

import {getAllStudentsController, saveStudentController} from "../controller/StudentController"

const router = Router();

//localhost:4000/student/getall
router.route("/getall")
.get(getAllStudentsController)


//localhost:4000/student/save
router.route("/save")
.post(saveStudentController)

export default router;