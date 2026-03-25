import { Flex } from "antd";
import DashboardCards from "../components/dashboard-cards/dashboard-cards";
import RecentQuizzes from "../components/recent-quizzes/recent-quizzes";

export default function Dashboard() {
  return (
    <Flex vertical>
      <Flex vertical>
        <h1>Dashboard</h1>
        <p>Welcome to tadreebi</p>
      </Flex>
      <Flex vertical>
        <DashboardCards />
        <RecentQuizzes />
      </Flex>
    </Flex>
  );
}
