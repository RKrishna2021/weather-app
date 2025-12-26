const Loader = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    <p className="mt-4 text-slate-500 font-medium animate-pulse">Syncing with satellites...</p>
  </div>
);

export default Loader;
