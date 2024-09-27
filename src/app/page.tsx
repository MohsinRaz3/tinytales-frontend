import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-[90%]  relative ">
      <Image src={"/images/bgBubbles.svg"} height={854} width={1073} className="h-full max-h-screen -z-10 w-full max-w-[100%] md:max-w-[60%] absolute -top-24 p-0 right-0 bg-cover" alt="tinytales logo" />
    </div>
  );
}
