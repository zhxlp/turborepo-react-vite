import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as AllIcons from "@repo/icons";

const meta: Meta = {
  title: "Components/Icons",
  component: () => null,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `**Package:** \`@repo/icons\`

#### Usage
\`\`\`tsx
import { IconName } from '@repo/icons';
\`\`\``,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// 图标展示组件
const IconsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const iconEntries = Object.entries(AllIcons);

  const filteredIcons = iconEntries.filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div style={{ padding: "24px" }}>
      {/* 搜索框 */}
      <div style={{ marginBottom: "24px" }}>
        <input
          type="text"
          placeholder="搜索图标..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "12px 16px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />
        <div style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>
          共 {filteredIcons.length} 个图标
        </div>
      </div>

      {/* 图标网格 */}
      {filteredIcons.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
          未找到匹配的图标
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredIcons.map(([name, IconComponent]) => (
            <div
              key={name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                border: "1px solid #e1e5e9",
                borderRadius: "12px",
                backgroundColor: "white",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() => {
                navigator.clipboard.writeText(name);
                alert(`已复制图标名称: ${name}`);
              }}
            >
              <IconComponent
                style={{
                  width: "32px",
                  height: "32px",
                  marginBottom: "12px",
                  color: "#333",
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const All: Story = {
  render: () => <IconsShowcase />,
};
