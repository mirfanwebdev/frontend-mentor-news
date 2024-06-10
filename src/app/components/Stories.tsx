import { sideStories } from "../libs/sideStories"

export default function Stories() {
    return (
        <aside className="border p-6 bg-darkBlue text-offWhite sm:w-2/3">
            <h2 className="text-3xl font-bold text-softOrange">New</h2>
            {sideStories.map((story) => (
                <div key={story.id} className="py-7 border-b border-darkGrayishBlue">
                    <h3 className=" font-bold text-xl hover:cursor-pointer hover:text-softOrange active:text-softOrange">{story.title}</h3>
                    <p className=" text-grayishBlue">{story.content}</p>
                </div>
            ))}
        </aside>
    )
}