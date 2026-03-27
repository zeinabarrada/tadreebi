import { Card, Input } from "antd";
import "./create-header.css";
export default function CreateHeader() {
  return (
    <Card style={{ marginTop: 10 }}>
      <h2>Quiz Details</h2>
      <div className="section">
        <p className="title">Title</p>
        <Input allowClear placeholder="e.g Javascript Basics" />
      </div>
      <div className="section">
        <p className="title">Description</p>
        <Input allowClear placeholder="Brief description of the quiz" />
      </div>
    </Card>
  );
}
