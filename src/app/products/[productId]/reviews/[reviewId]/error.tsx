"use client";

export default function ErrorBoundray({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}
