"use server"

import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

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