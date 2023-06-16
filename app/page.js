'use client'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Page() {
  const defaultState = {
    center: [38.976153, 45.037664],
    zoom: 5,
  };

  return (
    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=38.961102962493904%2C45.02144502960909%2C38.98942708969117%2C45.03482092427761&amp;layer=mapnik"></iframe>
  );
}