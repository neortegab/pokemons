import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

export default function Landing() {
  return (
    <div>
        <div className="login">
            Login
            <Link to="/home">
                Catch them all!
            </Link>
        </div>
    </div>
  )
}
