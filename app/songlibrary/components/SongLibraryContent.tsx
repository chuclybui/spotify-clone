"use client";

import Library from "@/components/Library";
import { Song } from "@/types";

interface SongLibraryContentProps {
  songs: Song[];
}

const SongLibraryContent:React.FC<SongLibraryContentProps> = ({
    songs
  }) => {
    return (
      <div>
        <Library libraryPageClassName songs={songs}/>
      </div>
    )
  }      

export default SongLibraryContent;