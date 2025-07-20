"use client";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="pt-10 text-4xl font-bold">Jest Test</h1>
      <p className=" text-lg">Let&apos;s try writing some unit tests!</p>
      <Image src="/test-image.jpg" alt="Test Image" width={400} height={100} />
      <p className="text-sm text-gray-500">
        Photo taken from:
        <Link
          href="https://www.pexels.com/photo/time-displayed-on-top-of-a-building-1824273/"
          className="text-blue-500 hover:underline ml-2"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.pexels.com/photo/time-displayed-on-top-of-a-building-1824273/",
              "_blank"
            );
          }}
        >
          pexels
        </Link>
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 mt-4">
        <Link href="#secondary">Go to Secondary Section</Link>
      </button>
    </div>
  );
}
