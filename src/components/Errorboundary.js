import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  returnHomePage = () => {
    window.location.href = '/';
  };
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="d-flex flex-column text-center">
            <h1 className="mb-4" style={{ fontSize: 90 }}>
              OOPS
            </h1>
            <h4 className="m-0">Something went wrong here!</h4>
            <p className="m-0">You can go back and try again or contact us</p>
            <p className="mt-4">
              <Link to="/" onClick={this.returnHomePage} className="btn btn-outline-dark">
                Contact us
              </Link>
              <Link to="/" onClick={this.returnHomePage} className="btn btn-dark ml-3">
                Try again
              </Link>
            </p>
          </div>
        </div>
      );
    }
    return <Fragment>{this.props.children}</Fragment>;
  }
}
export default ErrorBoundary;
