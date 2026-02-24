"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import postsData from "@/data/posts.json";
import Image from "next/image";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ContrastIcon } from "lucide-react";

const page = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);
  const images = [
    "/images/corid.png",
    "https://res.cloudinary.com/dce35sgmb/image/upload/v1771967847/cocid_mnyrdr.png",
  ];
  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MM/dd/yyyy");
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-1 md:px-4 md:pt-1 ">
        <nav className="mt-4 p-1 flex gap-2 items-center text-gray-500">
          <Link href="/">
            <p className="text-sm">Home</p>
          </Link>
          <span>{">"}</span>
          <Link href="/accounts">
            <p className="text-sm">Accounts</p>
          </Link>
          <span>{">"}</span>
          <Link href={`/accounts/${slug}`}>
            <p className="text-sm">{post?.title}</p>
          </Link>
        </nav>
        <div className="bg-white grid gap-8 md:grid-cols-2 p-4  ">
          <div className="space-y-4">
            <div className="relative  h-[400px]  border overflow-hidden shadow-md bg-gray-100 ">
              <Image
                src={images[selectedImage]}
                alt={post?.title || "image"}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative  h-20 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${selectedImage === idx ? "border-3 border-amber-300 scal-105" : "hover:scale-105"}`}
                >
                  <Image
                    src={img}
                    alt={`${post?.title} ${idx}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="space-y-1 border p-4">
              <h1 className="text-xl font-bold">{post?.title}</h1>
              <p className="text-sm text-gray-400 ">
                {post?.createdAt && (
                  <span>Posted on {dateFormat(post.createdAt)}</span>
                )}
              </p>
              <h1 className="text-emerald-700 font-bold text-3xl py-2">
                Tk {post?.price}{" "}
                <span className="text-[12px] text-gray-500">Negotiable</span>
              </h1>
              <div className="mt-4 space-y-2">
                <h1 className="text-gray-500">
                  Game Name :{" "}
                  <span className="text-gray-600">{post?.category.name}</span>
                </h1>
                <h1 className="font-bold pt-2">Description</h1>
                <p className="text-gray-500 ">{post?.description}</p>
              </div>
            </div>

            <div className="w-full mx-auto bg-white border    overflow-hidden font-sans">
              <div className="p-2 flex items-center gap-4">
                <div className="relative w-14 h-14 flex-shrink-0 border border-gray-100  overflow-hidden p-1">
                  <Image
                    src="https://res.cloudinary.com/dce35sgmb/image/upload/v1771967847/cocid_mnyrdr.png"
                    alt="Infotech Logo"
                    fill
                    className=" object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 leading-tight">
                    Infotech
                  </h2>
                  <p className="text-gray-500 text-sm">Member since Dec 2023</p>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-gray-100">
                <Link
                  href="tel:01897000000"
                  className="flex flex-col items-center justify-center py-2 border-r border-gray-100 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.1 15.1 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A15 15 0 013 6a1 1 0 011-1h3.41a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11l-2.11 2.08z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700">Call</span>
                </Link>
                <Link
                  href="/chat"
                  className="flex flex-col items-center justify-center py-2 border-r border-gray-100 hover:bg-gray-50 transition-all group"
                >
                  <div className="relative w-11 h-11  group-hover:scale-110 transition-transform flex items-center justify-center">
                    <svg
                      className="absolute w-6 h-6 text-[#FFC107] left-0 bottom-0.8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                    <svg
                      className="absolute w-6 h-6 text-[#00A884] right-2 top-0.5 drop-shadow-sm"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-800">Chat</span>
                </Link>
                <Link
                  href="https://wa.me/01897000000"
                  target="_blank"
                  className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-6 h-6 text-green-500 mb-2 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full"
                    >
                      <path d="M12.012 2.25c-5.376 0-9.75 4.374-9.75 9.75 0 1.718.447 3.332 1.232 4.737L2.25 21.75l5.147-1.35a9.687 9.687 0 004.615 1.163c5.376 0 9.75-4.374 9.75-9.75s-4.374-9.75-9.75-9.75zm5.904 13.762c-.244.688-1.21 1.253-1.666 1.332-.456.079-.925.143-3.13-.746-2.652-1.072-4.364-3.763-4.496-3.94-.132-.177-1.077-1.432-1.077-2.73 0-1.298.678-1.935.92-2.193.241-.258.524-.323.7-.323.175 0 .35 0 .502.007.16.008.375-.06.587.452.212.512.723 1.758.786 1.887.063.13.106.279.02.45-.086.171-.129.278-.255.425-.126.147-.265.328-.378.441-.126.126-.258.263-.111.516.147.253.654 1.078 1.403 1.745.966.86 1.777 1.127 2.03 1.254.253.126.401.106.551-.066.15-.171.644-.75.815-1.006.171-.256.342-.214.577-.128.235.086 1.492.704 1.748.832.256.129.426.193.49.3.064.106.064.615-.18 1.303z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    WhatsApp
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
