import Employee from "../Models/EmployeeModel.js";

//create employee

export const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res
      .status(200)
      .json({ message: "Employee created successfully", result: newEmployee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error in Create Employee" });
  }
};


// get employee

export const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();
    res
      .status(200)
      .json({ message: "employees fetched successfully", result: employee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error in Get Employees" });
  }
};

//update user

export const updateEmployee = async (req, res) => {
    try {
      const id  = req.params.id
    const updatedEmployee = await Employee.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        salary:req.body.salary,
        designation:req.body.designation,
        role:req.body.role

    })
    res
    .status(200)
    .json({ message: "Employee Updated successfully" , result: updatedEmployee });
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: "Internal Server Error in Update Employee" });
    }
}

// delete employee

export const deleteEmployee = async (req, res) => {
    try {
      const id  = req.params.id
    const deletedEmployee = await Employee.findByIdAndDelete({_id:id})
    res
    .status(200)
    .json({ message: "Employee Deleted successfully"});
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: "Internal Server Error in Delete Employee" });
    }
}

//get employee BY ID
export const getEmployeeById = async (req, res) => {
    try {
      const id  = req.params.id
    const employee = await Employee.findById({_id:id})
    res
    .status(200)
    .json({ message: "Employee fetched successfully", result: employee });
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: "Internal Server Error in Get Employee By ID" });
    }
}