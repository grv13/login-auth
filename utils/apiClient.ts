import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://easework-auth.agreeablemeadow-f51dff9d.centralindia.azurecontainerapps.io/auth/', // Ensure the backend URL is set in the environment variables
  withCredentials: true, // Include cookies in requests
});

export default apiClient;
