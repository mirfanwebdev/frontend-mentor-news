import { sideStories } from "../libs/sideStories"

export default function Stories() {
    return (
        <aside className="border p-4">
            <h2>New</h2>
            {sideStories.map((story) => (
                <div key={story.id} className="border">
                    <h3>{story.title}</h3>
                    <p>{story.content}</p>
                </div>
            ))}
            {/* <div className="border">
                <h3>Hydrogen Electric Card</h3>
                <p>Will hydrogen-fueled car get caught in trend.</p>
            </div> */}
            {/* <div className="border">
                <h3>Hydrogen Electric Card</h3>
                <p>Will hydrogen-fueled car get caught in trend.</p>
            </div>
            <div className="border">
                <h3>Hydrogen Electric Card</h3>
                <p>Will hydrogen-fueled car get caught in trend.</p>
            </div><div className="border">
                <h3>Hydrogen Electric Card</h3>
                <p>Will hydrogen-fueled car get caught in trend.</p>
            </div> */}
        </aside>
    )
}