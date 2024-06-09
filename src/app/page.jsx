import ImageContainer from "@/components/ImageContainer";
import Image from "next/image";
import Link from "next/link";

import imgAvatar from "@/assets/avatar-jessica.jpeg";

export default function Home() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "/",
    },
    {
      name: "Frontend Mentor",
      url: "/",
    },
    {
      name: "LinkedIn",
      url: "/",
    },
    {
      name: "Twitter(X)",
      url: "/",
    },
    {
      name: "Instagram",
      url: "/",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-2 p-24 bg-[#1f1f1f] text-white rounded-md w-fit h-fit">
      <ImageContainer width="200px" height="200px" className="rounded-full">
        <Image src={imgAvatar} className="rounded-full" />
      </ImageContainer>

      <h1 className="text-2xl">Jessica Randall</h1>

      <p className="text-[#cdef40]">London, United Kingdom</p>

      <small>"Front-end developer and avid reader."</small>
      <ul className="flex flex-col gap-4">
        {socialLinks.map((socialLink) => {
          return (
            <li key={socialLink.name} className="w-full bg-[#333333] rounded-md text-center px-4 py-1">
              <Link href={socialLink.url}>{socialLink.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
