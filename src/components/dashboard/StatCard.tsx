import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  iconSize?: number;
}

export function StatCard({ title, value, change, icon: Icon, iconSize = 22 }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Icon 
            className="text-[#6A717F]" 
            style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
            strokeWidth={1.65} 
          />
          <span className="text-[14px] text-[#6A717F] font-sans font-normal leading-5 tracking-[0px]">
            {title}
          </span>
        </div>
        <div className="flex items-center justify-between self-stretch">
          <span className="text-[24px] font-bold text-black font-sans leading-5">
            {value}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-black font-sans font-normal leading-4 tracking-[0px]">
              {change}
            </span>
            <div className="flex items-center justify-center rounded-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65373 12.3607C1.45453 12.1695 1.44807 11.8529 1.63931 11.6537L4.99931 8.15373C5.09359 8.05552 5.22385 8 5.36 8C5.49615 8 5.62641 8.05552 5.72069 8.15373L7.76 10.278L10.1766 7.76067L8.45488 6.10777L14 4.5L12.6198 10.1061L10.898 8.4532L8.12069 11.3463C8.02641 11.4445 7.89615 11.5 7.76 11.5C7.62385 11.5 7.49359 11.4445 7.39931 11.3463L5.36 9.22199L2.36069 12.3463C2.16946 12.5455 1.85294 12.5519 1.65373 12.3607Z"
                  fill="#01891C"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
