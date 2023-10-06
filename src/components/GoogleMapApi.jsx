import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "dotenv/config";
import { useMemo } from "react";
const GoogleMapApi = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });
  if (isLoaded) return <div>Loading..</div>;
  return <div>Map</div>;
};

export default GoogleMapApi;
