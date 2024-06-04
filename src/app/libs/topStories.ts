import { StaticImageData } from "next/image";
import imgNews1 from "@/app/assets/image-retro-pcs.jpg";
import imgNews2 from "@/app/assets/image-top-laptops.jpg";
import imgNews3 from "@/app/assets/image-gaming-growth.jpg";

interface TopStories {
    id: number
    number: string
    img: StaticImageData
    name: string
    content: string
}

export const topStories: TopStories[] = [
    {
        id: 1,
        number: "01",
        img: imgNews1,
        name: "Reviving Retro PCs",
        content: "What happens when old PCs are given modern upgrades?",
    },
    {
        id: 2,
        number: "02",
        img: imgNews2,
        name: "Top 10 Laptops of 2022",
        content: "Our best picks for various needs and budgets.",
    },
    {
        id: 3,
        number: "03",
        img: imgNews3,
        name: "The Growth of Gaming",
        content: "How the pandemic has sparked fresh opportunities.",
    },
]