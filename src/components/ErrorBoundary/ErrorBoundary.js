import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // loggerShouldBeHere
    console.error(errorInfo);
  }

  static getDerivedStateFromError() {
    return {hasError: true}
  }

  render() {
    const {hasError} = this.state
    const {children} = this.props

    if (hasError) {
      return (
        <div>
          <h2>An error occurred...</h2>
        </div>
      )
    }

    return children;
  }
}

export default ErrorBoundary;