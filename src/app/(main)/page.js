import Image from "next/image";
import banner from "@/assets/playground.png"

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 bg-amber-200 mt-5">
      {/* News category */}
      <div className="bg-green-500 col-span-3">
        <h1 className="text-2xl font-bold">All Category</h1>
      </div>

      {/* main body all news section */}
      <div className="col-span-6">
        <h1 className="text-2xl font-bold">All News</h1>

        <div>
          <h2 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, suscipit?</h2>
          <Image src={banner} width={400} height={250}></Image>
          <p className="text-gray-400 mask-b-to-mist-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus eaque esse architecto, rem saepe accusantium, maxime cum, laudantium eius quisquam amet. Tenetur nam recusandae corrupti nulla fugit? Incidunt sapiente praesentium ab esse molestias quo itaque sunt id, quidem laudantium nobis nemo earum! Accusamus maxime, eligendi neque tenetur nisi at.</p>
        </div>
      </div>

      {/* Side bar */}
      <div className="col-span-3 bg-purple-500">
        <h1 className="text-2xl font-bold">Login With</h1>
      </div>
    </div>
  );
}
