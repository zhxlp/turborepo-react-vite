export function generateComponentDescription({
  componentPackageName,
  componentName,
  description = "",
}: {
  componentPackageName: string;
  componentName: string;
  description?: string;
}) {
  return `**Package:** \`${componentPackageName}\`

#### Usage
\`\`\`tsx
import { ${componentName} } from '${componentPackageName}';
\`\`\`
${description}`;
}
