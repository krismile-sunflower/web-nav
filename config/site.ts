export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Learning",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "工具",
      href: "/tools",
    },
    {
      title: "热点",
      href: "/hot",
    },
  ],
  links: {
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
