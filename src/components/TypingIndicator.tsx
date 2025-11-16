import { Sparkles } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 px-4 py-6 bg-background animate-fade-in">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-ai-blue to-ai-cyan text-white">
        <Sparkles className="h-5 w-5" />
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-semibold">Anshi AI</p>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
};