import Link from "next/link";

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
        <nav className="flex justify-between">
            <div>logo</div>
            <div className="flex gap-4">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>{item.name}</Link>
                ))}
             </div>
        </nav>
    )
}