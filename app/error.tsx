"use client";

import { useEffect } from "react";
import { Btn } from "@/components/ui/Btn";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if available
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center selection:bg-wine/20">
      <h2 className="font-serif text-3xl text-wine sm:text-4xl">
        சிறு பிழை ஏற்பட்டுள்ளது / Something went wrong
      </h2>
      <p className="mt-4 max-w-md text-sm text-stone-600 sm:text-base">
        மன்னிக்கவும், பக்கத்தை ஏற்றுவதில் ஒரு சிக்கல் உள்ளது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-wine transition hover:bg-white active:scale-95"
        >
          மீண்டும் முயற்சி செய்
        </button>
        <Btn internal href="/">
          முகப்பிற்கு
        </Btn>
      </div>
    </div>
  );
}
