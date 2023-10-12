import connectToDatabase from "@/database";
import User from "@/modals/user";
import { hashSync } from "bcrypt";
import Joi from "joi";
import { NextResponse } from "next/server";
// import { hash } from "bcryptjs";



const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
})



export const dynamic = 'force-dynamic';
export async function POST(req , res){
    await connectToDatabase();

    const {name , email , password ,role} =await req.json();

    const {error} = schema.validate({name, email, password,role});
    if(error){
        return NextResponse.json({
            sucess: false,
            message:email.details[0]
        })
        console.log("error here")
    }



    try {
        const isUserAlreadyExists = await User.findOne({email});
    if (isUserAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User is already exists. Please try with different email.",
      });
    } else {
      // var salt = bcrypt.genSaltSync(10);
      const hashPassword = await hashSync(password, 12);
      console.log("user");

      const newlyCreatedUser = await User.create({
        name,
        email,
        password: hashPassword,
        role,
      });

      if (newlyCreatedUser) {
        return NextResponse.json({
          success: true,
          message: "Account created successfully.",
        });
      }
    }
    } catch (error) {
        console.log("Registration failed");
        return NextResponse.json({
            sucess: false,
            message: "Try again later"});
    }

};