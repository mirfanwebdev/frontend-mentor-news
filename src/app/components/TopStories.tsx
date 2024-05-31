import Image from "next/image";
import { topStories } from "../libs/topStories";
export default function TopStories() {
    return (
        <section className="flex justify-between">
            {topStories.map((story) => (
                <div key={story.id} className="border flex gap-2">
                    <Image src={story.img} alt="story-image" width={80} height={100} />
                    <div className="flex flex-col">
                        <h2>{story.number}</h2>
                        <h3>{story.name}</h3>
                        <p>{story.content}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}