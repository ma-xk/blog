const Logout = ({ onLogout }) => {
    const handleLogout = () => {
      localStorage.clear();
      window.location.reload();
    };
  
    return (
      <Button text="Logout" onClick={handleLogout} />
    );
  };