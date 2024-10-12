import { NavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const userNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/user",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "History Pengumpulan",
    href: "/users/waste_exchanges",
    icon: "waste_exchanges",
    label: "History Pengumpulan",
  },
  {
    title: "Jasa Kebersihan",
    href: "/users/cleaning_services",
    icon: "cleaning_service",
    label: "Jasa Kebersihan",
  },
  {
    title: "Olahan Sampah",
    href: "/users/marketplace",
    icon: "marketplace",
    label: "Olahan Sampah",
  },
  {
    title: "Pelaporan Sampah",
    href: "/users/waste_reports",
    icon: "waste_reports",
    label: "Pelaporan Sampah",
  },
  {
    title: "Pickup Sampah",
    href: "/users/waste_schedules",
    icon: "waste_schedule",
    label: "Pickup Sampah",
  },
  {
    title: "Komunitas",
    href: "/users/communities",
    icon: "communities",
    label: "Komunitas",
  },
  {
    title: "Event",
    href: "/users/events",
    icon: "events",
    label: "Event",
  },
  {
    title: "Login Harian",
    href: "/users/daily",
    icon: "waste_reports",
    label: "Login Harian",
  },
  {
    title: "Redeem Hadiah",
    href: "/users/rewards",
    icon: "rewards",
    label: "Redeem Hadiah",
  },
  {
    title: "Leaderboard",
    href: "/users/leaderboards",
    icon: "leaderboards",
    label: "Leaderboard",
  },
];
export const adminNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Achievement",
    href: "/admin/achievements",
    icon: "achievements",
    label: "Achievement",
  },
  {
    title: "Admin Post",
    href: "/admin/admin_posts",
    icon: "admin_post",
    label: "Admin Post",
  },
  {
    title: "Berita",
    href: "/admin/blogs",
    icon: "blogs",
    label: "Berita",
  },
  {
    title: "Jasa Kebersihan",
    href: "/admin/cleaning_services",
    icon: "cleaning_service",
    label: "Jasa Kebersihan",
  },
  {
    title: "Komunitas",
    href: "/admin/communities",
    icon: "communities",
    label: "Komunitas",
  },
  {
    title: "Edukasi",
    href: "/admin/educations",
    icon: "blogs",
    label: "Edukasi",
  },
  {
    title: "Event",
    href: "/admin/events",
    icon: "events",
    label: "Event",
  },
  {
    title: "Log Kegiatan",
    href: "/admin/log_activities",
    icon: "log_histories",
    label: "Log Kegiatan",
  },
  {
    title: "Marketplace",
    href: "/admin/marketplace",
    icon: "marketplace",
    label: "Marketplace",
  },
  {
    title: "Misi Harian",
    href: "/admin/missions",
    icon: "mission",
    label: "Misi Harian",
  },
  {
    title: "Reward",
    href: "/admin/rewards",
    icon: "rewards",
    label: "Reward",
  },
  {
    title: "Pengguna",
    href: "/admin/users",
    icon: "user",
    label: "Pengguna",
  },
  {
    title: "Penukaran Sampah",
    href: "/admin/waste_exchanges",
    icon: "waste_exchanges",
    label: "Penukaran Sampah",
  },
  {
    title: "Pelaporan Sampah",
    href: "/admin/waste_reports",
    icon: "waste_reports",
    label: "Pelaporan Sampah",
  },
  {
    title: "Jadwal Sampah Keliling",
    href: "/admin/waste_schedules",
    icon: "waste_schedule",
    label: "Jadwal Sampah Keliling",
  },
];
export const adminPostNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin-post",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Pengumpulan Sampah",
    href: "/admin-post/waste_exchanges",
    icon: "waste_exchanges",
    label: "Pengumpulan Sampah",
  },
];

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Americano",
    price: 40000,
  },
  {
    id: 2,
    name: "Expresso",
    price: 20000,
  },
  {
    id: 3,
    name: "Arabica",
    price: 10000,
  },
];
