import User from '../models/User.js'

//new User

export const createUser = async(req,res)=>{
    const newUser = new User(req.body)

    try {
        
        const savedUser = await newUser.save()
        res.status(200).json({success:true,message:"Created Successfully",data:savedUser})


    } catch (error) {
        res.status(500).json({success:false,message:"Failure.. try again"})
        console.log(error);

    }
}


//update Users

export const updateUser = async(req,res)=>{
    const id = req.params.id;
    
    try {
        const updatedUser = await User.findByIdAndUpdate(id,{
            $set: req.param.body
        },{new:true})
        res.status(200).json({
            success:true,
            message:"Updated Successfully",data: updatedUser
    });
    

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to update.. try again"})
        console.log(error);

    }
}
//delete Users
export const deleteUser = async(req,res)=>{
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"Deleted Successfully"
    });
    

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to Delete.. try again"})
        console.log(error);

    }
}

// get one User
export const getSingleUser = async(req,res)=>{
    const id = req.params.id
    try {
        const user= await User.findById(id);
        res.status(200).json({
            success:true,
            message:"Retrieved Successfully",
            data:user
            });
    

    } catch (error) {
        res.status(404).json({
            success:false,
            message:"Not Found 404"})
        console.log(error);

    }
}
// get all Users
export const getAllUser = async(req,res)=>{
  
    const page = parseInt(req.query.page)
    try {
   
        const users= await User.find({}).skip(page*8).limit(8);

        res.status(200).json({
            success:true,
          
            message:"Successfully Done",
            data:users,
            })
    

    } catch (error) {
        res.status(404).json({
            success:false,
            message:"Not Found 404"})
        console.log(error);

    }
}