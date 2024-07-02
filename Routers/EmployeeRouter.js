import express from 'express';
import { createEmployee, deleteEmployee, getEmployee, updateEmployee} from '../Controllers/EmployeeController.js';



const router = express.Router();


router.get("/get-employee",getEmployee)
router.post("/create-employee",createEmployee)
router.put("/update-employee/:id",updateEmployee)
router.delete("/delete-employee/:id",deleteEmployee)


export default router;