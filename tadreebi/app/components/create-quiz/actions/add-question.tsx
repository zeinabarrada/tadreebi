"use client";
import { IconCirclePlus } from "@tabler/icons-react";
import { Button } from "antd";
import Quizzes from "../questions/questions";

type Props = {
  questions: number[];
  setQuestions: React.Dispatch<React.SetStateAction<number[]>>;
  handleDelete: (index: number) => void;
};

export default function AddQuestion({
  questions,
  setQuestions,
  handleDelete,
}: Props) {
  const handleAddQuestions = () => {
    setQuestions((prev) => [...prev, prev.length]);
  };
  return (
    <div>
      {questions.map((_, index) => (
        <Quizzes key={index} index={index} handleDelete={handleDelete} />
      ))}
      <Button type="primary" block onClick={handleAddQuestions}>
        <IconCirclePlus size={18} /> Add Question
      </Button>
    </div>
  );
}
