import mongoose from "mongoose";
import Question from "../models/Question.js";

export const getQuestions = async (req, res) => {
  try {
    const Questions = await Question.find();

    res.status(200).json(Questions);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No question with that id");
  }

  const question = await Question.findById(id);
  res.json(question);
};

export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const update = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No question with that id");
  }
  const updatedQuestion = await Question.findByIdAndUpdate(id, update, {
    new: true,
  });

  res.json(updatedQuestion);
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No question with that id");
  }

  await Question.findByIdAndRemove(id);
  res.json({ message: `Post deleted successfully` });
};

export const createQuestion = async (req, res) => {
  const question = req.body;
  const newQuestion = new Question(question);

  try {
    await newQuestion.save();
    res.status(200).json(newQuestion);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
