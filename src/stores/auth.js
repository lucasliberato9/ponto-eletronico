import jwtDecode from 'jwt-decode'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      usuario: null,
      sessao:null,
      setToken: (token) => {
        const { usuario } = jwtDecode(token);
        set({token, usuario});
      },
      setUsuario: (usuario) => set({usuario}),
      setSessao: (sessao) => set({sessao}),
      clearSessao: () => set({sessao: null}),
      clearAuth: () => set({token: null, usuario: null}),
      
    }),
    {
      name: "auth", // name of the item in the storage (must be unique)
      
    }
  )
)

export default useAuthStore;