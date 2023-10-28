import { FaPlay } from "react-icons/fa"

const PlayButton = () => {
  return (
    <button
    className="
    transition
    bg-green-500
    rounded-full
    flex
    items-center
    p-4
    drop-shadow-md
    translate-y-1/4
    opacity-0
    group-hover:opacity-100
    group-hover:translate-y-0
    hover:scale-110">
      <FaPlay className="text-black"/>
    </button>
  )
}

export default PlayButton