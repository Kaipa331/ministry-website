import { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, onClose, duration = 3200 }: ToastProps) {
  useEffect(() => {
    const id = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(id);
  }, [onClose, duration]);

  return (
    <div
      role="status"
      className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 animate-rise rounded-full bg-[#001a4d] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(0,26,77,0.35)]"
    >
      {message}
    </div>
  );
}
