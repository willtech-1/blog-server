import express from "express";
const router = express.Router();

import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  getBlogsBySearch,
  getBlogsByTag,
  getBlogsByUser,
  getRelatedBlogs,
  likeBlog,
  updateBlog,
} from "../controllers/blog.js";
import auth from "../middleware/auth.js";

router.get("/search", getBlogsBySearch);
router.get("/tag/:tag", getBlogsByTag);
router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", auth, createBlog);
router.post("/relatedBlogs", getRelatedBlogs);
router.delete("/:id", auth, deleteBlog);
router.patch("/:id", auth, updateBlog);
router.get("/userBlogs/:id", auth, getBlogsByUser);
router.patch("/like/:id", auth, likeBlog);

export default router;
