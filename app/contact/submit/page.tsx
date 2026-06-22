"use client";
import { Suspense } from "react";
import { HandleSubmit } from "../../ui/HandleSubmit";

export default function Page() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <HandleSubmit />
    </Suspense>
  );
}
