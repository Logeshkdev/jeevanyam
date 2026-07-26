export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-wine/20 border-t-gold" />
        <p className="animate-pulse text-sm font-bold uppercase tracking-widest text-gold">
          Jeevanyam
        </p>
      </div>
    </div>
  );
}
