import { AnimatedIconName } from "@/components/ui/animated-icon";

export interface FooterCapabilityItem {
  label: string;
  icon: AnimatedIconName;
  id?: string;
}

export interface FooterData {
  navIcons: Record<string, AnimatedIconName>;
  capabilities: FooterCapabilityItem[];
}
