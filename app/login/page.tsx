'use client';

export default function Login() {
  const handleLogin = () => {
    // Redirect user directly to the login API endpoint
    window.location.href = `https://easework-auth.agreeablemeadow-f51dff9d.centralindia.azurecontainerapps.io/auth/microsoft/login`;
    // window.location.href = `http://127.0.0.1:8000/auth/microsoft/login`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Login with Microsoft
      </button>
    </div>
  );
}
