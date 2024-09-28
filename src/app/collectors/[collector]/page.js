"use client"
import React from 'react';
import UserProfile from '@/components/UserProfile';
import { dummyStamps0 } from '@/utils/StampData0';
import { trendingData } from '@/utils/trendingData';

const UserProfilePage = ({ params }) => {
  const { collector } = params; 

  // Find the collector data across all time periods
  const findCollectorData = (collectorName) => {
    for (const period in trendingData) {
      const collectorData = trendingData[period].find(
        (item) => item.collector.toLowerCase() === collectorName.toLowerCase()
      );
      if (collectorData) {
        return collectorData;
      }
    }
    return null;
  };

  // Get user data based on the collector name
  const user = findCollectorData(collector);

  if (!user) {
    return <div className="text-white">Collector not found</div>;
  }

  return (
    <UserProfile user={user} collections={dummyStamps0} />
  );
};

export default UserProfilePage;