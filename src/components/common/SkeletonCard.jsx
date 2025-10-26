import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-64 h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse">
      <div className="h-40 bg-gray-300 dark:bg-gray-600 rounded-t-2xl"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mt-2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
