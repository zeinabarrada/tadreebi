import {
  IconDeviceTabletQuestion,
  IconLayoutDashboard,
  IconPencilPlus,
} from "@tabler/icons-react";
import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
  const items: MenuItem[] = [
    {
      key: "dashboard",
      label: <Link href={"/dashboard"}>Dashboard</Link>,
      icon: <IconLayoutDashboard size={18} />,
    },
    {
      key: "create",
      label: <Link href={"/create"}>Create Quiz</Link>,
      icon: <IconPencilPlus size={18} />,
    },
    {
      key: "quizzes",
      label: <Link href={"/quizzes"}>My Quizzes</Link>,
      icon: <IconDeviceTabletQuestion size={18} />,
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("Clicked:", e.key);
  };

  return (
    <Sider width={256}>
      <Menu
        onClick={onClick}
        style={{ width: 256, height: "100vh" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
