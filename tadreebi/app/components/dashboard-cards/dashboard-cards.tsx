import { Flex } from "antd";
import DashboardCard from "./dashboard-card";

export default function DashboardCards() {
  return (
    <Flex gap={8}>
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </Flex>
  );
}
