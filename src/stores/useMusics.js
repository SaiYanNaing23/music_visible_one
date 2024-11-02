import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";


export const useMusic = create((set)=>({
    musicContent: null,
    isFetchMusic : false,
    recommendMusic : null,
    fetchMusicData: async (credentials) => {
        set({ isFetchMusic : true });
        try {
            const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024`, credentials);
            set({ musicContent: response.data.album, isFetchMusic : false });
            set({ recommendMusic: response.data.album})
        } catch (error) {
            toast.error(error || "An error occurred")
            set({ user: null, isFetchMusic : false });
            console.error(error);
        }
    },
}))