import { CONTACT_STEPS } from "@/lib/data/contact";
import { ShieldCheck } from "lucide-react";

export function ContactProcess() {
  return (
    <div className="p-6 sm:p-7 rounded-3xl border border-[#EFE5EC] bg-white space-y-4">
      <div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#922F55]">
          Roadmap & Expectations
        </span>
        <h3 className="text-lg font-bold text-[#121114] tracking-tight mt-0.5">
          What Happens Next?
        </h3>
      </div>

      <div className="space-y-4 pt-1">
        {CONTACT_STEPS.map((step) => (
          <div key={step.number} className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#FAF0F6] border border-[#F3DBE9] text-[#922F55] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
              {step.number}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-[#121114]">
                  {step.title}
                </h4>
                <span className="text-[10px] font-mono font-bold text-[#922F55] shrink-0">
                  {step.time}
                </span>
              </div>
              <p className="text-xs text-[#64606D] mt-0.5 leading-snug">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-[#F5EDF3] flex items-center gap-2 text-xs text-[#706B78]">
        <ShieldCheck size={16} className="text-[#922F55] shrink-0" />
        <span>Mutual NDA signed prior to code audits or proprietary disclosures.</span>
      </div>
    </div>
  );
}
