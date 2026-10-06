import { create } from "zustand"

const user_Info = {
    name: "The Octocat",
    login: "octocat",
    bio: "This Profile has no bio",
    avatar_url: "/user.png",
    location: "United States",
    followers: 30455,
    following: 9,
    company: "Athryon",
    created_at: "25 Jan 2026",
    twitter_username: "Not Available",
    public_repos: 10,
    public_gists: 0,
    html_url: "https://github.blog",
}

const useUsers = create((set) => ({
    data: user_Info,
    setData: (value) => set({data: value})
}))

export default useUsers