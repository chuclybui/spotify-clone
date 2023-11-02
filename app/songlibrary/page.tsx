import Header from "@/components/Header";
import getSongsByUserId from "@/actions/getSongsByUserId";
import SongLibraryContent from "./components/SongLibraryContent";


export const revalidate = 0;

const SongLibrary = async () => {
  const userSongs = await getSongsByUserId();
  return (
    <div className="
    bg-neutral-900   
    rounded-lg
    md:hidden
    w-full
    h-full
    overflow-hidden
    overflow-y-auto">
      <Header>
      </Header>       
      <SongLibraryContent songs={userSongs} />
    </div>
  )
}

export default SongLibrary;