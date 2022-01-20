export type GithubData = {
  name: string;
  avatar_url: string;
  location: string;
  bio: string;
};

export async function fetchGithubData(username: string): Promise<GithubData> {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { avatar_url, name, location, bio }: GithubData = await response.json();

  return {
    avatar_url,
    name,
    location,
    bio,
  };
}
