"use client";
import { Card, Tag } from "antd";
import { List } from "antd";
import Link from "next/link";
export default function RecentQuizzes() {
  const data = [
    {
      id: "1",
      title: "JavaScript Basics",
      questions: 10,
      status: "Published",
    },
    {
      id: "2",
      title: "React Fundamentals",
      questions: 8,
      status: "Draft",
    },
    {
      id: "3",
      title: "CSS Advanced",
      questions: 12,
      status: "Published",
    },
  ];
  return (
    <Card style={{ minWidth: 390, marginTop: 20 }}>
      <h3>Recent Quizzes</h3>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Link href={`/quizzes/${item.id}`}>
                  <strong>{item.title}</strong>
                </Link>
                <div style={{ fontSize: 12, color: "#6b7280" }}>
                  {item.questions} questions
                </div>
              </div>
              <div>
                <Tag
                  color={item.status === "Published" ? "green" : "orange"}
                  style={{ marginTop: 4 }}
                >
                  {item.status}
                </Tag>
              </div>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}
