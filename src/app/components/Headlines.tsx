import Image from "next/image";
import headImg from "@/app/assets/image-web-3-desktop.jpg"
export function Headlines() {
    return (
        <section className="flex flex-col">
            <Image src={headImg} alt="headline-image" height={350}/>
                <div className="flex justify-between mt-9">
                    <h1 className="w-1/3 text-5xl font-extrabold">The Bright Future of Web 3.0?</h1>
                    <div className="w-1/2 flex flex-col justify-between">
                        <p className=" text-darkGrayishBlue">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
  But is it really fulfilling its promise?
                        </p>
                        <button className="w-fit border py-2 px-6 bg-softRed text-sm font-semibold tracking-widest">READ MORE</button>
                </div>
            </div>
        </section>
    );
}