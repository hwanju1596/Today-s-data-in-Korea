import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Layout from "../components/Layout/Layout";

const Main = () => {
  var map = null;

  function initMap() {
    map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 0,
    });
  }

  const mapStyle = {
    width: "50vw",
    height: "55vw",
  };
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <div id="map" style={mapStyle} />
      </Grid>
    </Layout>
  );
};

export default Main;
