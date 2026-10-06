import {create} from 'zustand'

const useTheme = create((set) => ({
    theme: 'light',
    setTheme: (value) => set({theme: value})
}))

export default useTheme