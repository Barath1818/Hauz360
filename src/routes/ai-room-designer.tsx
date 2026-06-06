import { createFileRoute } from "@tanstack/react-router";

import AIRoomDesigner from "../components/site/AIRoomDesigner";

export const Route = createFileRoute(
  "/ai-room-designer"
)({
  component: AIPage,
});

function AIPage() {
  return <AIRoomDesigner />;
}