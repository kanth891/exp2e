import React from 'react';

export default function LiteralDisplay() {
  const name = "React";
  const version = 19;
  const message = `Welcome to ${name} version ${version}!`;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>{message}</p> {/* Displaying string literal */}
    </div>
  );
}
