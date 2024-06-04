import Image from "next/image";
import { topStories } from "../libs/topStories";
export default function TopStories() {
    return (
        <section className="flex justify-between">
            {topStories.map((story) => (
                <div key={story.id} className="flex gap-3 w-1/3">
                    <Image src={story.img} alt="story-image" width={80} />
                    <div className="flex flex-col">
                        <h2 className="text-softRed text-2xl font-bold">{story.number}</h2>
                        <h3 className="font-bold">{story.name}</h3>
                        <p className="text-darkGrayishBlue text-sm">{story.content}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}