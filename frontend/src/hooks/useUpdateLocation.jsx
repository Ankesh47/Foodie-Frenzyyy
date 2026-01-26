import axios from "axios";
import React, { useEffect } from "react";
import { serverUrl } from "../App";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentAddress,
  setCurrentCity,
  setCurrentState,
  setUserData,
} from "../redux/userSlice";
import { setAddress, setLocation } from "../redux/mapSlice";

function useUpdateLocation() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    const updateLocation = async (lat, lon) => {
      // Don't try to update location if user isn't logged in yet
      if (!userData) return;
      
      try {
        const result = await axios.post(
          `${serverUrl}/api/user/update-location`,
          { lat, lon },
          { withCredentials: true },
        );
        console.log(result.data);
      } catch (error) {
        console.log("Loc update failed:", error);
      }
    };

    const watchId = navigator.geolocation.watchPosition((pos) => {
      updateLocation(pos.coords.latitude, pos.coords.longitude);
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, [userData]);
}

export default useUpdateLocation;
