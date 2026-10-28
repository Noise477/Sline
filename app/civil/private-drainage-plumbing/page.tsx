import type { Metadata } from "next";

import CivilServiceDetail from "@/components/CivilServiceDetail";

export const metadata: Metadata = {
  title: "Private Drainage & Plumbing | Civil | SLINE",
  description:
    "Private drainage, plumbing and associated site-service works delivered as part of SLINE civil projects.",
};

export default function PrivateDrainagePlumbingPage() {
  return (
    <CivilServiceDetail
      heroEyebrow="Civil · Private Drainage & Plumbing"
      heroTitle="Services connected."
      heroAccentTitle="Site moving forward."
      heroDescription="Private drainage, plumbing and associated site-service works coordinated with earthworks, public drainage and the wider construction sequence."
      heroImage="/images/civil/civil-service-connection-trench.jpg"
      heroImageAlt="SLINE service connection trench"
      introEyebrow="Private Drainage & Plumbing"
      introTitle="On-site drainage and plumbing connected to the wider civil scope."
      introParagraphs={[
        "Private drainage and plumbing cover the on-site systems that need to connect the property with the surrounding infrastructure. These works sit closely alongside excavation, trenching, public drainage and other service connections.",
        "Bringing these stages into the same site programme helps reduce gaps between separate contractors and makes it easier to coordinate access, trenching, backfilling and the condition in which the site is left for the next stage.",
      ]}
      sections={[
        {
          eyebrow: "On-Site Connections",
          title: "From site boundary into the property.",
          paragraphs: [
            "Private drainage and plumbing works can involve the on-site connections and service routes required for the property, together with the excavation and trench preparation needed to complete those works.",
            "The exact scope varies by project, but the aim is to coordinate the underground work with the ground conditions, public connections and the construction sequence rather than treating each element in isolation.",
          ],
          image: "/images/civil/civil-underground-services-installation.jpg",
          imageAlt: "SLINE underground service installation",
        },
        {
          eyebrow: "Coordination",
          title: "One trench can affect several later stages.",
          paragraphs: [
            "Underground services need to be planned carefully around one another. Access, trench locations, existing services and reinstatement can all affect how efficiently the site progresses.",
            "SLINE can coordinate private drainage and plumbing with related earthworks and civil activity so the site is prepared in a more deliberate sequence.",
          ],
          image: "/images/civil/civil-utility-services-site.jpg",
          imageAlt: "Underground utility services on a SLINE civil project",
        },
      ]}
      relatedProjectText="Private drainage and plumbing formed part of SLINE's wider delivery at 197 Stoddard Road alongside asbestos removal, demolition, earthworks, public drainage and All-in-One site works."
    />
  );
}
