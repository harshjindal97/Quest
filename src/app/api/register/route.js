import connectToDatabase from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";


const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min().required(),
    role: Joi.string().required(),
})

export const dynamic = 'force-dynamic';
export async function Post(req , res){
    await connectToDatabase();

    const {name , email , password ,role} =await req.json();

    const {error} = schema.validate({name, email, password,role});
    if(error){
        return NextResponse.json({
            sucess: false,
            message:email.details[0]
        })
    }

    try {
        const isUserAlreadyExists = await User.findOne({ email });

    if (isUserAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User is already exists. Please try with different email.",
      });
    } else {
      const hashPassword = await hash(password, 12);

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