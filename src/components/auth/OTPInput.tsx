import { useRef, useState, useEffect, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  disabled?: boolean;
}

export default function OTPInput({
  length = 6,
  onComplete,
  disabled = false,
}: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (disabled) return;

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, length);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length && i < length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    const lastFilledIndex = Math.min(pastedData.length, length) - 1;
    inputRefs.current[lastFilledIndex]?.focus();

    if (pastedData.length === length) {
      onComplete(pastedData);
    }
  };

  const getInputState = (index: number): "empty" | "entering" | "entered" => {
    if (otp[index]) return "entered";

    const firstEmptyIndex = otp.findIndex((digit) => !digit);
    if (firstEmptyIndex === index) return "entering";

    return "empty";
  };

  return (
    <div className="flex gap-3 justify-center">
      {otp.map((digit, index) => {
        const state = getInputState(index);
        return (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            className={cn(
              "w-14 h-14 text-center text-2xl font-semibold rounded-[4px] border transition-all",
              "focus:outline-none font-sans",
              state === "empty" && "border-[#D9E1EC] bg-white text-[#A1A7C4]",
              state === "entering" &&
                "border-[#06888C] bg-white text-[#131523] ring-2 ring-[#06888C]",
              state === "entered" && "border-[#06888C] bg-white text-[#131523]",
              disabled && "bg-gray-100 cursor-not-allowed opacity-50",
            )}
          />
        );
      })}
    </div>
  );
}
