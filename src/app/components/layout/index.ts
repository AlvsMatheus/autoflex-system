export type NavItem = {
    label: string;
    href: string;
    icon: string;
}

export const navItems: NavItem[] = [
  { label: "Products", href: "/products", icon: "📦" },
  { label: "Raw Materials", href: "/raw-materials", icon: "🧪" },
  { label: "Production", href: "/production", icon: "🏭" },
];