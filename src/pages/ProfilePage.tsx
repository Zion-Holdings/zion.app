import React from 'react';

const ProfilePage: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '40px auto', // Added more top margin
    backgroundColor: '#f9f9f9', // Light background for the page
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid #eee',
    textAlign: 'center',
    color: '#333',
  };

  const formGroupStyle: React.CSSProperties = {
    marginBottom: '20px', // Increased spacing
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '8px', // Increased spacing
    fontWeight: 'bold',
    color: '#555',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px', // Increased padding
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    minHeight: '120px', // Increased height
    resize: 'vertical',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>User Profile</h1>
      </header>

      <form>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input type="text" id="name" name="name" style={inputStyle} placeholder="Enter your name" autoComplete="name" />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input type="email" id="email" name="email" style={inputStyle} placeholder="Enter your email" autoComplete="email" />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="bio" style={labelStyle}>Bio</label>
          <textarea id="bio" name="bio" style={textareaStyle} placeholder="Tell us a bit about yourself..."></textarea>
        </div>
        
        {/*
        A placeholder for a submit button, not functional for now.
        When styling is done via classes, this can be a proper Button component.
        */}
        {/*
        <div style={{ marginTop: '30px', textAlign: 'right' }}>
          <button
            type="button" // Changed to type="button" as it's not submitting yet
            style={{
              padding: '12px 25px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Save Changes
          </button>
        </div>
        */}
      </form>
    </div>
  );
};

export default ProfilePage;
