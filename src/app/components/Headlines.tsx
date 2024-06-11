import Image from "next/image";
import headImg from "@/app/assets/image-web-3-desktop.jpg"
export function Headlines() {
    return (
        <section className="flex flex-col">
            <Image src={headImg} alt="headline-image" height={350}/>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between mt-4 sm:mt-9">
                <h1 className="sm:w-1/3 text-5xl font-extrabold">The Bright Future of Web 3.0?</h1>
                <div className="sm:w-1/2 flex flex-col gap-4 sm:justify-between">
                        <p className=" text-darkGrayishBlue">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
  But is it really fulfilling its promise?
                        </p>
                        <button className="w-fit border py-2 px-6 bg-softRed text-sm font-semibold tracking-widest hover:bg-darkBlue hover:text-grayishBlue">READ MORE</button>
                </div>
            </div>
        </section>
    );
}