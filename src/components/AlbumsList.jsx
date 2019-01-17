import React from "react";
import { Container } from "./Container";
import { Year } from "./Year";
import { Month } from "./Month";
import { Album } from "./Album";
import { groupBy } from "lodash";
import { NoAlbums } from "./NoAlbums";

const findMinYear = albums =>
  albums.reduce((year, album) => {
    return Math.min(year, album.yearReleased);
  }, Infinity);

const findMaxYear = albums =>
  albums.reduce((year, album) => {
    return Math.max(year, album.yearReleased);
  }, -Infinity);

const getAlbumCover = album => {
  const { cover, coverUrl } = album;
  if (coverUrl && coverUrl !== "undefined") {
    return coverUrl;
  } else if (cover && cover.url) {
    return cover.url;
  } else {
    return "https://f4.bcbits.com/img/a4139357031_10.jpg";
  }
};

const renderAlbum = album => {
  return (
    <Album
      key={album.id}
      id={album.id}
      title={album.title}
      artist={album.artist}
      cover={getAlbumCover(album)}
    />
  );
};

export const AlbumsList = ({ albums }) => {
  if (albums && albums.length) {
    const children = [];
    const minYear = findMinYear(albums);
    const maxYear = findMaxYear(albums);
    const years = [];
    for (let year = minYear; year <= maxYear; year++) {
      years.push(year);
    }
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ].map((name, idx) => ({
      month: idx + 1,
      name
    }));
    const albumsByYearMonth = groupBy(
      albums,
      ({ yearReleased, monthReleased }) => {
        return `${yearReleased}-${monthReleased}`;
      }
    );
    for (let year of years) {
      children.push(<Year key="year">{year}</Year>);
      for (let { month, name } of months) {
        const thisMonth = `${year}-${month}`;
        const albumsInThisMonth = albumsByYearMonth[thisMonth];
        if (albumsInThisMonth && albumsInThisMonth.length) {
          children.push(<Month key={thisMonth}>{name}</Month>);
          children.push(albumsInThisMonth.map(renderAlbum));
        }
      }
    }
    return <Container>{children}</Container>;
  } else {
    return <NoAlbums />;
  }
};
