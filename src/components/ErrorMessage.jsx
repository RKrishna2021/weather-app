const ErrorMessage = ({ message }) => (
  <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-2xl flex items-center gap-3 animate-bounce mt-4">
    <span className="text-xl">⚠️</span>
    <p className="font-medium">{message}</p>
  </div>
);

export default ErrorMessage;
