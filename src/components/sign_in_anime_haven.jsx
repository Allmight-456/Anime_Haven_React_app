import React from 'react';

const Login = () => {
  const styles = `
    * {
      background-color: bisque;
    }
    form {
      width: 50%; 
      margin: 0 auto; 
      padding: 20px; 
    }
    label, input {
      display: block; 
      margin-bottom: 10px;
    }
    input {
      width: 100%; 
      padding: 10px; 
    }
    input[type="submit"] {
      background-color: #274dd6; 
      color: white; 
      padding: 14px 20px; 
      border: none; 
      cursor: pointer; 
    }
    input[type="submit"]:hover {
      background-color: #da543a; 
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <form>
        <div>
          <label htmlFor="E-Mail">E-Mail</label>
          <input type="email" id="Your name" name="username" required />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" id="text" name="username" required />
        </div>
        <div> 
          <label htmlFor="Submit"></label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default Login;