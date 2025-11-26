import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            color: "#F1F1F1",
            backgroundColor: "#1a1a1a",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>Canvas Error</p>
          <p
            style={{
              fontSize: "12px",
              opacity: 0.7,
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            {this.state.error?.message ||
              "An error occurred while rendering the 3D content"}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
