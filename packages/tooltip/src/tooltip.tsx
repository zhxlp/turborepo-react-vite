import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styles from "./tooltip.module.scss";

export interface TooltipProps {
  children: React.ReactNode;
  title: string;
  delayDuration?: number;
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  delayDuration = 0,
  sideOffset = 0,
  side,
}) => {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={0}
    >
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={styles.Content}
            sideOffset={sideOffset}
            side={side}
          >
            {title}
            <TooltipPrimitive.Arrow className={styles.Arrow} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
