import React from "react";

import Layout from "./components/Layout/Layout";
import Profile from "./components/Profile/Profile";

import { fetchGithubData, GithubData } from "./fetchGithubData";

export default function App(): JSX.Element {
  const [user, setUser] = React.useState<GithubData | null>(null);

  React.useEffect((): void => {
    async function getData(): Promise<void> {
      const data = await fetchGithubData("DouglasPimentel");
      setUser(data);
    }

    getData();
  }, [fetchGithubData]);

  return (
    <Layout>
      <Profile
        name={user?.name}
        imgAvatar={user?.avatar_url}
        location={user?.location}
        textBio={user?.bio}
      />
    </Layout>
  );
}
