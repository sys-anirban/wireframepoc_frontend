import React from 'react';

export default function Loader() {
  return (
    <div className="d-flex py-3 justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
