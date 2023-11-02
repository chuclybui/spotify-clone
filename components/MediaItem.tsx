"use client";
import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";


interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
  libraryPageClassName?:boolean
}

const MediaItem: React.FC<MediaItemProps>= ({
  data,
  onClick,
  libraryPageClassName
}) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data)

  const handleClick = () => {
    if(onClick) {
      return onClick(data.id);
    }
    return player.setId(data.id)
  }
  return (
    <div
    onClick={handleClick}
    className="
    flex
    items-center
    gap-x-3
    cursor-pointer
    hover:bg-neutral-800/50
    w-full
    p-2
    rounded-md">
      <div
      className={twMerge(`
      relative
      rounded-md
      
      overflow-hidden`,
      libraryPageClassName ? "min-h-[100px] min-w-[100px]": "min-h-[48px] min-w-[48px]"
    )}      
      >
        <Image
        fill
        src={imageUrl || '/images/liked.png'}
        alt="Media Item"
        className="object-cover"
         />
      </div>
      <div className="
      flex
      flex-col
      gap-y-1
      overflow-hidden
      ">
        <p className={twMerge(`text-white truncate`,
        libraryPageClassName? "text-lg": "text-base")}>
          {data.title}
        </p>
        <p className={twMerge(`text-neutral-400 truncate`,
        libraryPageClassName? "text-base": "text-sm")}>
          {data.author}
        </p>
      </div>
      
      </div>
  )
}

export default MediaItem