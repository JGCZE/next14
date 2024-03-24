"use server"

import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/app/lib/auth";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    await connectToDb()
    const newPost = new Post({ title, desc, slug, userId });

    await newPost.save();
    console.log("save to DB")
    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
    return {error: "Something went wrong"}
  }
}

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id)
  try {
    await connectToDb()

    await Post.findByIdAndDelete(id);
    console.log("deleted from DB")
    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
    return {error: "Something went wrong"}
  }
}

export const handleGithubLogin = async() => {
  await signIn("github")
};

export const handleLogOut = async() => {
  await signOut()
};

export const register = async (formData) => {
  const { username, email, password, passwordRepeat } = 
    Object.fromEntries(formData)

  if(password !== passwordRepeat){
    return "Password does not match"
  }

  try {
    connectToDb()
    const user = await User.findOne({username})

    if (user){
      return "already exist"
    }

    const newUser = new User({
      username,
      email,
      password,
    })
    await newUser.save()
    console.log("user saved");
  } catch (err){
    console.log(err);
    return { error: "something went wrong!"}
  }
}

export const login = async (formData) => {
  const { username, password } = 
    Object.fromEntries(formData)

  try {
    await signIn("credentials", { username, password })
  } catch (err){
    console.log(err);
    return { error: "something went wrong!"}
  }
}
