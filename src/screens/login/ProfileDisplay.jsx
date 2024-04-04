import React, { useState, useEffect } from "react";
import { db } from "../../Firebase.js";
import { collection, getDocs } from "firebase/firestore";

const ProfileDisplay = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const profileSnapshot = await getDocs(collection(db, "profiles"));
        const profileData = profileSnapshot.docs.map(doc => ({
          userId: doc.id,
          ...doc.data()
        }));
        setProfiles(profileData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        setError("Failed to fetch profiles");
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map(profile => (
          <li key={profile.userId}>
            <p>Name: {profile.userName}</p>
            <p>Email: {profile.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDisplay;
