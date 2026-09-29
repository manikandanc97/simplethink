import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CreditCard,
  FileText,
  BarChart3,
  Settings,
  Search,
  Bell,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { type ServiceData } from "@/lib/data/services";

interface ServicesMockupWindowProps {
  service: ServiceData;
}

export function ServicesMockupWindow({ service }: ServicesMockupWindowProps) {
  const sidebarNav = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Customers", icon: Users },
    { label: "Projects", icon: FolderKanban },
    { label: "Sales", icon: CreditCard },
    { label: "Invoices", icon: FileText },
    { label: "Reports", icon: BarChart3 },
    { label: "Settings", icon: Settings },
  ];

  return (
    <div className="lg:col-span-7 relative">
      {/* Subtle Ambient Backlight Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 via-[var(--accent-soft)]/30 to-[var(--accent-soft)]/30 rounded-3xl blur-2xl -z-10" />

      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-surface-elevated shadow-elevated overflow-hidden p-4.5 sm:p-6 text-left"
        >
          {/* Window Header */}
          <div className="flex items-center justify-between pb-4.5 sm:pb-4 border-b border-surface-elevated">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Brand Tag */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-white">
                <Sparkles size={11} className="text-pink-200" />
                <span className="text-xs sm:text-xs font-black tracking-wider uppercase">
                  SIMPLUXE
                </span>
              </div>
              <span className="hidden sm:inline-block text-xs font-semibold text-muted-foreground">
                {service.mockup.badge}
              </span>
            </div>

            {/* Right controls: Search bar & User Avatar */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background border border-surface-elevated text-muted-foreground text-xs">
                <Search size={12} />
                <span className="text-xs">Search...</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-background border border-surface-elevated flex items-center justify-center text-muted-foreground">
                <Bell size={12} />
              </div>
              <div className="flex items-center gap-1.5 pl-1.5 border-l border-surface-elevated">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--primary)] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  M
                </div>
                <span className="text-xs font-bold text-foreground hidden sm:inline">
                  Mani 👋
                </span>
              </div>
            </div>
          </div>

          {/* Window Body: Mini Sidebar + Main Content */}
          <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-4.5 sm:pt-4">
            {/* Mini Sidebar */}
            <div className="col-span-3 sm:col-span-3 border-r border-surface-elevated pr-2 sm:pr-3 flex flex-col gap-1">
              {sidebarNav.map((nav, idx) => {
                const NavIcon = nav.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      nav.active
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-muted-foreground hover:bg-background hover:text-foreground"
                    }`}
                  >
                    <NavIcon size={13} className="shrink-0" />
                    <span className="hidden sm:inline">{nav.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Right Content Area */}
            <div className="col-span-9 sm:col-span-9 flex flex-col gap-4 sm:gap-4 pl-1 sm:pl-2">
              {/* Greeting */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xs sm:text-sm font-extrabold text-foreground tracking-tight">
                  Welcome back, Mani 👋
                </h3>
                <p className="text-xs sm:text-xs text-muted-foreground">
                  Here&apos;s what&apos;s happening with your {service.name.toLowerCase()} today.
                </p>
              </div>

              {/* 3 KPI Cards */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
                <div className="p-2 sm:p-2.5 rounded-xl bg-background border border-surface-elevated flex flex-col">
                  <span className="text-[9px] sm:text-xs font-semibold text-muted-foreground">
                    Total Projects
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs sm:text-base font-black text-foreground">12</span>
                    <span className="text-[9px] sm:text-xs font-bold text-emerald-600 flex items-center">
                      <ArrowUpRight size={10} /> +20%
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-background border border-surface-elevated flex flex-col">
                  <span className="text-[9px] sm:text-xs font-semibold text-muted-foreground">
                    Active Clients
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs sm:text-base font-black text-foreground">9</span>
                    <span className="text-[9px] sm:text-xs font-bold text-emerald-600 flex items-center">
                      <ArrowUpRight size={10} /> +18%
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-background border border-surface-elevated flex flex-col">
                  <span className="text-[9px] sm:text-xs font-semibold text-muted-foreground">
                    Revenue
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs sm:text-base font-black text-foreground">₹112.4L</span>
                    <span className="text-[9px] sm:text-xs font-bold text-emerald-600 flex items-center">
                      <ArrowUpRight size={10} /> +24%
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart + Recent Activity */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-stretch">
                {/* Project Overview Chart */}
                <div className="sm:col-span-7 p-2.5 sm:p-4 rounded-xl bg-background border border-surface-elevated flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-xs font-bold text-foreground">Project Overview</span>
                    <span className="text-[9px] font-semibold text-muted-foreground">Last 6 Mos</span>
                  </div>

                  {/* SVG Wave Chart */}
                  <div className="relative w-full h-20 sm:h-24 mt-1">
                    <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#DB2777" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#DB2777" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 65 Q 30 50, 60 55 T 120 25 T 160 30 T 200 10 L 200 80 L 0 80 Z" fill="url(#chartGradient)" />
                      <path d="M0 65 Q 30 50, 60 55 T 120 25 T 160 30 T 200 10" fill="none" stroke="#DB2777" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="120" cy="25" r="3.5" fill="#922F55" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="200" cy="10" r="3.5" fill="#DB2777" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[8px] sm:text-[9px] text-muted-foreground mt-1 pt-1 border-t border-surface-elevated">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  </div>
                </div>

                {/* Recent Activity List */}
                <div className="sm:col-span-5 p-2.5 sm:p-4 rounded-xl bg-background border border-surface-elevated flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-xs font-bold text-foreground">Recent Activity</span>
                    <span className="text-[9px] text-primary font-bold cursor-pointer">View all</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 size={11} className="text-emerald-500 shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-foreground leading-tight">New project started</span>
                        <span className="text-[8px] text-muted-foreground">2 hrs ago</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Clock size={11} className="text-primary shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-foreground leading-tight">Design approved</span>
                        <span className="text-[8px] text-muted-foreground">5 hrs ago</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 size={11} className="text-blue-500 shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-foreground leading-tight">Deployment complete</span>
                        <span className="text-[8px] text-muted-foreground">Yesterday</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
