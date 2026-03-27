"use client";
import { Flex } from "antd";
import CreateHeader from "../components/create-quiz/create-header/create-header";
import Questions from "../components/create-quiz/questions/questions";
import AddQuestion from "../components/create-quiz/actions/add-question";
import { useState } from "react";

export default function Create() {
  const [questions, setQuestions] = useState<number[]>([1]);

  const handleDelete = (indexToDelete: number) => {
    setQuestions((prev) => prev.filter((_, index) => index !== indexToDelete));
  };
  return (
    <Flex vertical>
      <h1>Create Quizzes</h1>
      <CreateHeader />
      <AddQuestion
        questions={questions}
        setQuestions={setQuestions}
        handleDelete={handleDelete}
      />
    </Flex>
  );
}
