// temporaty data
import { connectToDb } from "./utils";
import { Post } from "./models"; // Import the necessary module for 'Post'
import { User } from "./models"; // Import the necessary module for 'User'

// const users = [
//   {id: 1, name: "Johny"},
//   {id: 2, name: "Jane"}
// ]

// const posts = [
//   {id:1, title: "Post 1", body: "........", userId: 1},
//   {id:2, title: "Post 2", body: "........", userId: 2},
//   {id:3, title: "Post 3", body: "........", userId: 3},
//   {id:4, title: "Post 4", body: "........", userId: 4},
// ]

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()

    return posts;

  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts")
  }
}

export const getPost = async (slug) => {
  try {
    connectToDb()
    const post = await Post.findOne({ slug })

    return post;

  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post")
  }
}

export const getUser = async (id) => {
  try {
    connectToDb()
    const user = await User.findById(id)

    return user;

  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch User")
  }
}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find()

    return users;

  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!")
  }
}