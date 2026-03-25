import { IconBook } from "@tabler/icons-react";
import { Card } from "antd";
import "./dashboard-card.css";
export default function DashboardCard() {
  return (
    <Card style={{ width: 400, marginTop: 15 }}>
      <div className="card-header">
        <p className="card-title">Total Quizzes</p>
        <IconBook size={20} className="card-icon" />
      </div>
      <h1>3</h1>
    </Card>
  );
}
