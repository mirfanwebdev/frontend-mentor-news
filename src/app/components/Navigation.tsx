"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.svg";
import menu from "@/app/assets/icon-menu.svg";
import closeMenu from "@/app/assets/icon-menu-close.svg";

interface NavItem {
    href: string
    name: string
}

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);
    return (
        <nav className="flex justify-between items-center">
            <Image
                src={logo}
                alt="logo"
                width={50}
                sizes="(max-width: 775px) 40px, 70px"
            />
            <NavigationMenu
                className="hidden sm:flex gap-12 text-darkGrayishBlue"
            />
            <button
                className="sm:hidden"
                onClick={handleToggle}
            >
                <Image
                    src={menu}
                    alt="menu"
                    width={30}
                />  
            </button>
            {isOpen && <MobileMenu handleToggle={handleToggle} isOpen={isOpen} className="flex flex-col gap-4 text-darkGrayishBlue" />}
        </nav>
    )
}

function NavigationMenu({className}: {className: string}) {
    const navItems: NavItem[] = [
        { href: "/", name: "Home" },
        { href: "/new", name: "New" },
        { href: "/popular", name: "Popular" },
        { href: "/trending", name: "Trending" },
        { href: "/categories", name: "Categories" },
    ];

    return (
        <div className={className}>
                {navItems.map((item) => (
                    <Link className="hover:text-softOrange active:text-softOrange" key={item.href} href={item.href}>{item.name}</Link>
                ))}
        </div>
    )
}

interface MobileMenuProps {
    handleToggle: () => void
    isOpen: boolean
    className: string
}

function MobileMenu({handleToggle, isOpen, className}: MobileMenuProps) {
    return (
        <div className="fixed flex top-0 right-0 w-screen h-screen">
            <div className="w-1/3 bg-black opacity-40"></div>
            <div className="flex flex-col gap-8 w-2/3 bg-white p-6">
                <button className=" self-end" onClick={handleToggle}>
                    <Image src={isOpen ? closeMenu : menu} alt="menu" width={30} />
                </button>
                <NavigationMenu className={className} />
            </div>
        </div>
    )
}