import { Moon } from "lucide-react"

const Header = () => {
  return (
    <div className="w-6/10 h-1/10 text-white">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">GitHub Users Finder</h1>
            <button><Moon /></button>
        </div>
    </div>
  )
}

export default Header