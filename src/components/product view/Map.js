import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../../img/locationIcon.png';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

export default function Map() {
  const DetailedProductString = sessionStorage.getItem("DetailedProduct");
  const savedProducts = DetailedProductString ? JSON.parse(DetailedProductString) : [];
  const [sellerDetails, setSellerDetails] = useState([]);
  const [latitudedb, setLatitude] = useState();
  const [longitudedb, setLongitude] = useState();

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        const response = await CallAPI({}, '/seller/get-all', 'GET');
        if (response && response.status) {
          const sellerDetails = response.seller.find((x) => x._id === savedProducts.sellerId);
          setSellerDetails(sellerDetails);

          setLatitude(sellerDetails.latitude);
          setLongitude(sellerDetails.longitude);
        } else {
          console.error('Error fetching seller name');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSellerDetails();
  }, []);

  const latitude = latitudedb || '6.8522148'; // Use a default value if latitudedb is undefined
  const longitude = longitudedb || '79.9248669'; // Use a default value if longitudedb is undefined

  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  if (latitude === undefined || longitude === undefined) {
    // Display a loading state or handle the case when latitude and longitude are not available
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MapContainer
        center={[parseFloat(latitude), parseFloat(longitude)]}
        zoom={13}
        style={{ height: '170px', width: '335px', marginTop: '20px' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[parseFloat(latitude), parseFloat(longitude)]} icon={customIcon} />
      </MapContainer>
    </div>
  );
}
