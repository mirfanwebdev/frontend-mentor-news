import Image from "next/image";
import headImg from "@/app/assets/image-web-3-desktop.jpg"
export function Headlines() {
    return (
        <section className="flex flex-col border">
            <Image src={headImg} alt="headline-image" width={800} height={500}/>
                <div className="flex justify-between">
                    <h1>The Bright Future of Web 3.0?</h1>
                    <div className="flex flex-col">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?
</p>
                        <button className="w-fit border p-2 bg-softRed">READ MORE</button>
                </div>
            </div>
        </section>
    );
}