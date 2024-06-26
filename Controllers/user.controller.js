import { User } from "../Models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  let { username, email, password } = req.body;

  try {
    let exitsUser = await User.findOne({ email });

    if (exitsUser) {
      return res.status(404).json({ message: "User alredy exits!", exitsUser });
    }

    let hasedPassword = await bcryptjs.hash(password, 10);

    let newUser = new User({
      username: username,
      email: email,
      password: hasedPassword,
    });

    await newUser.save();

    res.status(200).json({
      message: "User signup sucessfully!",
      newUser: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "server ERR:", error });
    console.log(`server err : ${error}`);
  }
};


export const login=async(req,res)=>{


    let {email,password}=req.body



    try {


        let user=await User.findOne({email})

        if (!user) {
            return res.status(404).json({ message: "User Not Found!", user });
            
        }

        let Match= await bcryptjs.compare(password,user.password)

        if (!Match) {
            return res.status(404).json({ message: "email or Password does not Match!", Match });
            
        }

        res.status(200).json({message:"Login sucessfully!",user:{
          id: user._id,
          username: user.username,
          email: user.email,
        }})


        
    } catch (error) {
        res.status(500).json({ error: "server ERR:", error });
    console.log(`server err : ${error}`);
        
    }
}