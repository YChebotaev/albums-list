import React from "react";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { AlbumsList } from "./AlbumsList";
import { FullscreenSpinner } from "./FullscreenSpinner";
import { ShowError } from "./ShowError";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import "./App.css";

export const App = () => {
  const { data, error, loading } = useQuery(
    gql`
      query {
        albums {
          id
          title
          artist
          yearReleased
          monthReleased
          dateReleased
          cover {
            url
          }
        }
      }
    `
  );

  if (loading) {
    return <FullscreenSpinner />;
  }

  if (error) {
    return <ShowError error={error} />;
  }

  return (
    <div className="App">
      <div className="App__header">
        <TopBar />
      </div>
      <main className="App__main">
        <AlbumsList albums={data.albums} />
      </main>
      <footer className="App__footer">
        <Footer />
      </footer>
    </div>
  );
};
