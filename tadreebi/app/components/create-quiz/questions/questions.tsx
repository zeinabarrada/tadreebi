"use client";
import { Button, Card, Flex, Input, Radio } from "antd";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { IconTrash } from "@tabler/icons-react";

const labelStyle: React.CSSProperties = {
  height: 32,
  lineHeight: "32px",
};

type Props = {
  index?: number;
  handleDelete: (index: number) => void;
};

export default function Quizzes({ index, handleDelete }: Props) {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Card>
      <Flex justify="space-between">
        {<h3>Question {index}</h3> /* check here it is starting from index 0 */}
        {index ? (
          <Button onClick={() => handleDelete(index)}>
            <IconTrash size={18} />
          </Button>
        ) : null}
      </Flex>
      <Input placeholder="Enter question text..." />
      <Radio.Group
        vertical
        value={value}
        onChange={onChange}
        style={{ marginTop: 15 }}
        options={[
          {
            value: 1,
            style: labelStyle,
            label: <Input placeholder="Option 1" />,
          },
          {
            value: 2,
            style: labelStyle,
            label: <Input placeholder="Option 2" />,
          },
          {
            value: 3,
            style: labelStyle,
            label: <Input placeholder="Option 3" />,
          },
          {
            value: 4,
            style: labelStyle,
            label: <Input placeholder="Option 4" />,
          },
        ]}
      />
      <p>Select the radio button next to the correct answer</p>
    </Card>
  );
}
