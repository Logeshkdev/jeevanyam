import Link from "next/link";
import { Btn } from "@/components/ui/Btn";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center selection:bg-wine/20">
      <h2 className="font-serif text-5xl text-wine sm:text-7xl">404</h2>
      <p className="mt-4 text-lg text-stone-600 sm:text-xl">
        பக்கம் கிடைக்கவில்லை / Page not found
      </p>
      <p className="mt-2 text-sm text-stone-500">
        நீங்கள் தேடும் கதை வேறொரு பக்கத்தில் இருக்கலாம்.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Btn internal>முகப்பிற்கு திரும்பவும்</Btn>
        </Link>
      </div>
    </div>
  );
}
