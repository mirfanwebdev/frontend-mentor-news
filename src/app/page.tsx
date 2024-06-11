import Navigation from "./components/Navigation";
import { Headlines } from "./components/Headlines";
import Stories from "./components/Stories";
import TopStories from "./components/TopStories";

export default function Home() {
  return (
    <main className="py-6 px-4 text-darkBlue sm:py-16 sm:px-44">
      <Navigation />
      <div className="flex flex-col sm:flex-row gap-7 my-12">
        <Headlines />
        <Stories/>
      </div>
      <TopStories/>
    </main>
  );
}
