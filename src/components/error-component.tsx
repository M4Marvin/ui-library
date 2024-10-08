const ErrorComponent = ({ message }: { message: string }) => (
  <div style={{ color: "red", padding: "10px", border: "1px solid red" }}>
    Error: {message}
  </div>
);

export default ErrorComponent;
