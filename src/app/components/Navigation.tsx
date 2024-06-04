import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.svg";

interface NavItem {
    href: string
    name: string
}

export default function Navigation() {
    const navItems: NavItem[] = [
        { href: "/", name: "Home" },
        { href: "/new", name: "New" },
        { href: "/popular", name: "Popular" },
        { href: "/trending", name: "Trending" },
        { href: "/categories", name: "Categories" },
    ]

    return (
        <nav className="flex justify-between items-center">
            <Image src={logo} alt="logo" width={70} />
            <div className="flex gap-12 text-darkGrayishBlue">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>{item.name}</Link>
                ))}
             </div>
        </nav>
    )
}