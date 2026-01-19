import { HelpCard } from "@/components/help/HelpCard";
import { HelpSearchBar } from "@/components/help/HelpSearchBar";
import { AddFaqDialog } from "@/components/help/AddFaqDialog";
import { faqApi } from "@/lib/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Loader2 } from "lucide-react";

const helpCards = [
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
];

export default function HelpCenter() {
  const [search, setSearch] = useState("");

  const { data: faqs, isLoading } = useQuery({
    queryKey: ["faqs", search],
    queryFn: async () => {
      const response = await faqApi.faqsGet(search || undefined);
      return response.data;
    },
  });

  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 md:p-9 flex justify-center">
      <div className="w-full max-w-[1110px] flex flex-col items-center gap-8 md:gap-11">
        <div className="w-full flex justify-end">
          <AddFaqDialog />
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-11 w-full max-w-[724px]">
          <div className="text-center">
            <h1 className="text-black font-sans text-2xl sm:text-3xl md:text-[32px] font-bold leading-5 mb-3">
              This is your Help Center
            </h1>
            <p className="text-black font-sans text-base sm:text-lg md:text-xl font-normal leading-5">
              How can we help you today?
            </p>
          </div>

          <div className="w-full">
            <HelpSearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        {/* FAQs Section */}
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>

          {isLoading ? (
            <div className="flex justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            </div>
          ) : faqs && faqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id || "item"}>
                  <AccordionTrigger className="text-left font-medium text-lg text-[#131523]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#50555C] whitespace-pre-wrap">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center text-gray-500">
              {search
                ? "No FAQs found matching your search."
                : "No FAQs added yet."}
            </div>
          )}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-[30px] border-t pt-10">
          {helpCards.map((card, index) => (
            <div key={index} className="min-h-[344px]">
              <HelpCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
