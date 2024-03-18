
const Test = () => {
  const handleLogin = () => {
    const redirectUri = encodeURIComponent('http://localhost:5173/register');
    const clientId = encodeURIComponent('YOUR_CLIENT_ID');
    const responseType = 'code';
    const scope = encodeURIComponent('profile email'); // Specify required scopes

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
  };

  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={handleLogin}>Test with Google</button>
    </div>
  );
};

export default Test;
