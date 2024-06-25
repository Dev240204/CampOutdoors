import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";


  const useUserStore = create(
    devtools(
      persist(
        (set) => ({
          user: null,
          setUser: (user) => set({ user }),
          clearUser: () => set({ user: null }),
          setToken: (token) =>
            set((state) => {
              if (state.user) {
                return { user: { ...state.user, token } };
              }
              return state;
            }),
          clearToken: () =>
            set((state) => {
              if (state.user) {
                return { user: { ...state.user, token: "" } };
              }
              return state;
            }),
        }),
        {
          name: "userStore",
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  );
  
  export { useUserStore };
  
