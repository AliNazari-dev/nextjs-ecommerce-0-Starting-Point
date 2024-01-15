"use client";

const ErrorPage = () => {
  return (
    <div className="flex justify-center h-[100vh] items-center">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <label className="swap swap-active text-6xl">
          <div className="swap-on">🥶</div>
        </label>
        Somethings went Wrong please refresh the Page
        <label className="swap swap-active text-6xl">
          <div className="swap-on">🥵</div>
        </label>
      </h1>
    </div>
  );
};

export default ErrorPage;
