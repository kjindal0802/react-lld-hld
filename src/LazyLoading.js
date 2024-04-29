import React, { Suspense } from "react";
const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default function App() {
  return (
    <Suspense fallback={<p> Loading...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
