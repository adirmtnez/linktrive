"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Linktrive data
const data = {
  user: {
    name: "User",
    email: "user@example.com",
    avatar: "/avatars/user.jpg",
  },
  teams: [
    {
      name: "Linktrive",
      logo: GalleryVerticalEnd,
      plan: "Free",
    },
    {
      name: "Personal",
      logo: AudioWaveform,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Inicio",
      url: "/dashboard/inicio",
      icon: PieChart,
      isActive: true,
    },
    {
      title: "Productos",
      url: "/dashboard/productos",
      icon: Frame,
      items: [
        {
          title: "Todos",
          url: "/dashboard/productos",
        },
        {
          title: "Categorías",
          url: "/dashboard/productos/categorias",
        },
        {
          title: "Subcategorías",
          url: "/dashboard/productos/subcategorias",
        },
      ],
    },
    {
      title: "Pedidos",
      url: "/dashboard/pedidos",
      icon: BookOpen,
    },
    {
      title: "Ventas",
      url: "/dashboard/ventas",
      icon: SquareTerminal,
    },
    {
      title: "Repartidores",
      url: "/dashboard/repartidores",
      icon: Map,
    }
  ],
  projects: [
    {
      name: "Work Links",
      url: "/dashboard/links/work",
      icon: Frame,
    },
    {
      name: "Personal Links",
      url: "/dashboard/links/personal",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
