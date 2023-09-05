import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#415F80', color: '#C0DEFF' }}>
      <p>&copy; {new Date().getFullYear()} Harrison Mohney. All rights reserved.</p>
    </footer>
  );
}