import Navigation from "./components/Navigation";
import { Headlines } from "./components/Headlines";
import Stories from "./components/Stories";
import TopStories from "./components/TopStories";

export default function Home() {
  return (
    <main className="py-16 px-44 text-darkBlue">
      <Navigation />
      <div className="flex gap-7 my-12">
        <Headlines />
        <Stories/>
      </div>
      <TopStories/>
    </main>
  );
}
