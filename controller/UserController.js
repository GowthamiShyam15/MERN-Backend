const User = require('../model/UserModel')

//creating user
const createUser = async(req, res)=>{
    try {
        const {fname, lname, email, password} = req.body
        const user = new User({
            fname,
            lname,
            email,
            password
        })
        await user.save()
        res.status(200).json({message:"User Created Successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error" });
    }
}

//accessing all user data
const getUser = async(req, res)=>{
    try {
        const user = await User.find()
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
}

//accessing individual user data
const singleUser = async(req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
}

//to update user record in mongodb
const updateUser = async(req, res)=>{
    try {
        const {fname, lname, email, password} = req.body
        const myUser = await User.findByIdAndUpdate(req.params.id,{fname,lname,email,password})
        if(!myUser){
            res.status(404).json({message:"User not found"});
        }
    res.status(200).json(myUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
}

//to delete user record
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
module.exports = { createUser, getUser, singleUser, updateUser,deleteUser };