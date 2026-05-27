import Image from "next/image";

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
      </div>

      {/* Side bar */}
      <div className="col-span-3 bg-purple-500">
        <h1 className="text-2xl font-bold">Login With</h1>
      </div>
    </div>
  );
}
