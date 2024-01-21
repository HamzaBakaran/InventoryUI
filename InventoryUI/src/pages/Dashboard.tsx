import React from 'react';
import DashboardList from "../components/DashboardList/DashboardList";
import UserList from "../components/UserList";

const Dashboard = () => {
  const handleButtonClick = async () => {
    const endpoint = 'https://k33am7n7w4hh4tky4rcgigomje0tzgao.lambda-url.eu-north-1.on.aws/';
    const email = 'kadet.bakaran.hamza@gmail.com';


    try {
      const urlWithQueryParam = `${endpoint}${encodeURIComponent(email)}`;
      const response = await fetch(urlWithQueryParam, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the response as needed
      if (response.ok) {
        console.log('Request successful');
      } else {
        console.error('Request failed');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <>
      <DashboardList />
      <button onClick={handleButtonClick}>Generate Report</button>
      <UserList />
      
    </>
  );
};

export default Dashboard;
