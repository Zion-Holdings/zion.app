import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next / link';
import { useRouter } from 'next / router';

const Verify: NextPage = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (code.length !== 6) {
      setMessage('Please enter a 6 - digit verification code');
      setIsLoading(false);
      return;
    }

    try { /  / Mock API call;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Email verified successfully!');
      setTimeout(() => {
        router.push(' / dashboard');
      }, 2000);
    } catch (error) {
      setMessage('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try { /  / Mock API call;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Verification code resent to your email!');
    } catch (error) {
      setMessage('Failed to resend code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className = "min - h - screen bg - gray - 50 flex flex - col justify - center py - 12 sm: px - 6 lg: px - 8">;
      <Head>;
        <title>Verify Email - AI Marketplace< / title>;
      </Head>;

      <div className = "sm: mx - auto sm: w - full sm: max - w - md">;
        <h2 className = "mt - 6 text - center text - 3xl font - extrabold text - gray - 900">;
          Verify your email;
        </h2>;
        <p className = "mt - 2 text - center text - sm text - gray - 600">;
          We've sent a verification code to your email address.;
        </p>;
      </div>;

      <div className = "mt - 8 sm: mx - auto sm: w - full sm: max - w - md">;
        <div className = "bg - white py - 8 px - 4 shadow sm: rounded - lg sm: px - 10">;
          <form className = "space - y - 6" onSubmit = {handleSubmit}>;
            <div>;
              <label htmlFor = "code" className = "block text - sm font - medium text - gray - 700">;
                Verification Code;
              </label>;
              <div className = "mt - 1">;
                <input;
                  id = "code";
                  name = "code";
                  type = "text";
                  autoComplete = "one - time - code";
                  required;
                  value = {code}
                  onChange = {(e) => setCode(e.target.value)}
                  className = "appearance - none block w - full px - 3 py - 2 border border - gray - 300 rounded - md shadow - sm placeholder - gray - 400 focus: outline - none focus: ring - blue - 500 focus: border - blue - 500 sm: text - sm";
                  placeholder = "Enter 6 - digit code";
                  maxLength = {6} / >;
              </div>;
            </div>;

            {message && (
              <div className = {`text - sm ${message.includes('error') || message.includes('Invalid') || message.includes('Please enter') ? 'text - red - 600': 'text - green - 600'}`}>;
                {message}
              </div>;
            )}

            <div>;
              <button;
                type = "submit";
                disabled = {isLoading}
                className = "w - full flex justify - center py - 2 px - 4 border border - transparent rounded - md shadow - sm text - sm font - medium text - white bg - blue - 600 hover: bg - blue - 700 focus: outline - none focus: ring - 2 focus: ring - offset - 2 focus: ring - blue - 500 disabled: opacity - 50";
              >;
                {isLoading ? 'Verifying...': 'Verify Email'}
              </button>;
            </div>;
          </form>;

          <div className = "mt - 6">;
            <div className = "relative">;
              <div className = "absolute inset - 0 flex items - center">;
                <div className = "w - full border - t border - gray - 300" / >;
              </div>;
              <div className = "relative flex justify - center text - sm">;
                <span className = "px - 2 bg - white text - gray - 500">Or< / span>;
              </div>;
            </div>;

            <div className = "mt - 6 space - y - 3">;
              <button;
                type = "button";
                onClick = {handleResendCode}
                disabled = {isLoading}
                className = "w - full flex justify - center py - 2 px - 4 border border - gray - 300 rounded - md shadow - sm text - sm font - medium text - gray - 700 bg - white hover: bg - gray - 50 focus: outline - none focus: ring - 2 focus: ring - offset - 2 focus: ring - blue - 500 disabled: opacity - 50";
              >;
                {isLoading ? 'Sending...': 'Resend Code'}
              </button>;
              
              <Link;
                href = " / auth / login";
                className = "w - full flex justify - center py - 2 px - 4 border border - gray - 300 rounded - md shadow - sm text - sm font - medium text - gray - 700 bg - white hover: bg - gray - 50 focus: outline - none focus: ring - 2 focus: ring - offset - 2 focus: ring - blue - 500";
              >;
                Back to login;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};

export default Verify;
