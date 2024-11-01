const Login = ({ onSubmit }) => {
    const handleSubmit = async (data) => {
      setIsLoading(true);
      const formData = {
        email: data.email,
        name: `${data.firstName} ${data.lastName}`, // Combining first and last names
        password: data.password,
        product_id: '0', // Handle this based on your requirements
      };
  
      try {
        const response = await fetch(
          'https://6iu6usbauc.us-east-1.awsapprunner.com/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );
  
        const responseData = await response.json();
        if (response.ok) {
          console.log('User successfully logged in', responseData);
          // Save JWT and user information to local storage
          localStorage.setItem('accessToken', responseData.access_token);
          localStorage.setItem('userId', responseData.user_id);
          localStorage.setItem('name', responseData.name);
          localStorage.setItem('email', responseData.email);
          localStorage.setItem('signupDate', responseData.signup_date);
          localStorage.setItem('productId', responseData.product_id);
          localStorage.setItem('welcomePromo', responseData.welcome_promo);
          localStorage.setItem('isAdmin', responseData.is_admin);
  
          setIsLoading(false);
  
          if (path !== 'admin') {
            window.location.href = '/profile';
          } else {
            window.location.reload(); // Reload the page after successful login on admin
          }
        } else {
          // Handle server side validation errors
          console.error('Log in failed:', responseData.message);
          // Show an error message to the user
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Registration error:', error);
        // Show an error message to the user
        setIsLoading(false);
      }
    };
  
    return (
      <Button text="Login" onClick={handleSubmit} />
    );
  };

export default Login;