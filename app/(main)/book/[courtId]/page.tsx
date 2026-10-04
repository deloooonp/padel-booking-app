import { CourtDetailHero } from "./_components/court-detail-hero";
import { BookingTerminal } from "./_components/booking-terminal";
import { CourtSpecifications } from "./_components/court-specifications";

import { COURT_DETAILS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

type Props = {
  params: Promise<{ courtId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courtId } = await params;
  const court = COURT_DETAILS[courtId];

  if (!court) {
    return {
      title: "Court Not Found - PadelHub",
    };
  }

  return {
    title: `${court.name} | PadelHub`,
    description: `Book ${court.name} at ${court.venue.name}. ${court.rating} rating, ${court.type}.`,
  };
}

export default async function CourtDetailPage({ params }: Props) {
  const { courtId } = await params;
  const court = COURT_DETAILS[courtId];

  if (!court) {
    notFound();
  }

  return (
    <main className="bg-navy min-h-[calc(100vh-80px)] w-full pt-28 pb-16">
      <div className="mx-auto flex w-full max-w-340 flex-col gap-8 px-4 sm:px-8">
        <Breadcrumb className="text-xs font-semibold tracking-wider uppercase">
          <BreadcrumbList>
            {court.breadcrumbs.map((item, i) => {
              const isLast = i === court.breadcrumbs.length - 1;
              return (
                <BreadcrumbItem key={i}>
                  {i > 0 && <BreadcrumbSeparator />}
                  {isLast ? (
                    <BreadcrumbPage className="text-lime font-bold">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      render={<Link href={item.href ?? "#"} />}
                      className="hover:text-white"
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <CourtDetailHero court={court} />

        <div className="grid grid-cols-1 items-start gap-8 pt-2 lg:grid-cols-12">
          <div className="sticky top-24 flex flex-col gap-4 lg:col-span-6">
            <BookingTerminal court={court} />
          </div>

          <div className="flex flex-col gap-8 lg:col-span-6">
            <CourtSpecifications court={court} />
          </div>
        </div>
      </div>
    </main>
  );
}
