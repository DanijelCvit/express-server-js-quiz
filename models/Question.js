import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  text: String,
  answers: {
    a: String,
    b: String,
    c: String,
    d: String,
  },
  correct: String,
  selected: String,
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
