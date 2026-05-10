export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-32">
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent [animation-delay:150ms]" />
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent [animation-delay:300ms]" />
      </div>
    </div>
  );
}
