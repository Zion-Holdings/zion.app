import React from 'react';

interface EmailVerificationBannerProps {
  onResendEmail: () => void;
  userEmail: string | null | undefined;
  isResending?: boolean; // Optional prop for loading state
}

const EmailVerificationBanner: React.FC<EmailVerificationBannerProps> = ({ onResendEmail, userEmail, isResending = false }) => {
  return (
    <div style={{
      padding: '10px',
      backgroundColor: '#fff3cd', // A light yellow, common for warnings
      color: '#856404', // Dark text for contrast
      textAlign: 'center',
      borderBottom: '1px solid #ffeeba',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%'
    }}>
      {userEmail && <p style={{ margin: 0, paddingBottom: '5px' }}>Verification email sent to <strong>{userEmail}</strong>. Please check your inbox (and spam folder).</p>}
      <p style={{ margin: 0 }}>
        Your email is not yet verified. Please check your email or{' '}
        <button
          onClick={onResendEmail}
          disabled={isResending}
          style={{
            color: '#007bff',
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit', // Ensure it inherits font styles
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
          aria-label="Resend verification email"
        >
          {isResending ? 'Resending...' : 'resend verification email'}
        </button>
        .
      </p>
    </div>
  );
};

export default EmailVerificationBanner;
