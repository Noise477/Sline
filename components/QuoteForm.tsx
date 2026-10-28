"use client";

import {
  FormEvent,
  useState,
} from "react";

type PropertyType =
  | ""
  | "residential"
  | "commercial";

type ResidentialInspectionType =
  | ""
  | "demolition"
  | "relocation"
  | "renovation";

/*
 * Internal asbestos inspection pricing.
 *
 * Do NOT display these values publicly.
 *
 * Prices are NZD excluding GST.
 * This will be used by the server-side
 * quote workflow once form submission
 * is connected to the backend.
 */
const asbestosInspectionPricing = {
  residential: {
    demolition: 750,
    relocation: 650,
    renovation: 650,
  },

  commercial: 1500,
} as const;

export default function QuoteForm() {
  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [projectType, setProjectType] =
    useState("");

  const [
    propertyType,
    setPropertyType,
  ] =
    useState<PropertyType>("");

  const [
    residentialInspectionType,
    setResidentialInspectionType,
  ] =
    useState<ResidentialInspectionType>("");

  const [details, setDetails] =
    useState("");

  const isAsbestosInspection =
    projectType ===
    "Asbestos Inspection";

  /*
   * Internal only.
   *
   * This value is deliberately NOT
   * rendered anywhere on the page
   * and is NOT currently added to
   * the customer's mailto draft.
   *
   * It is ready for use when we
   * connect a server-side form API.
   */
  const getInternalInspectionPrice =
    () => {
      if (
        !isAsbestosInspection
      ) {
        return null;
      }

      if (
        propertyType ===
        "commercial"
      ) {
        return asbestosInspectionPricing.commercial;
      }

      if (
        propertyType ===
          "residential" &&
        residentialInspectionType
      ) {
        return asbestosInspectionPricing
          .residential[
          residentialInspectionType
        ];
      }

      return null;
    };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    /*
     * Reserved for the future backend.
     *
     * We calculate it internally now,
     * but deliberately do not expose
     * the price in the customer's email.
     */
    const internalInspectionPrice =
      getInternalInspectionPrice();

    void internalInspectionPrice;

    const subject =
      `Project Enquiry - ${
        projectType ||
        "General"
      }`;

    const bodyLines = [
      "SLINE Demolition Ltd - Project Enquiry",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Project Location: ${location}`,
      `Project Type: ${projectType}`,
    ];

    if (
      isAsbestosInspection
    ) {
      bodyLines.push(
        `Property Type: ${
          propertyType ===
          "residential"
            ? "Residential"
            : propertyType ===
              "commercial"
            ? "Commercial / Public"
            : ""
        }`
      );

      if (
        propertyType ===
          "residential" &&
        residentialInspectionType
      ) {
        const inspectionLabel = {
          demolition:
            "Demolition",
          relocation:
            "House Relocation",
          renovation:
            "Renovation",
        }[
          residentialInspectionType
        ];

        bodyLines.push(
          `Inspection Purpose: ${inspectionLabel}`
        );
      }
    }

    bodyLines.push(
      "",
      "Project Details:",
      details
    );

    const body =
      bodyLines.join("\n");

    const mailto =
      `mailto:info@sline.co.nz` +
      `?subject=${encodeURIComponent(
        subject
      )}` +
      `&body=${encodeURIComponent(
        body
      )}`;

    window.location.href =
      mailto;
  };

  const handleProjectTypeChange = (
    value: string
  ) => {
    setProjectType(value);

    if (
      value !==
      "Asbestos Inspection"
    ) {
      setPropertyType("");
      setResidentialInspectionType(
        ""
      );
    }
  };

  const handlePropertyTypeChange = (
    value: PropertyType
  ) => {
    setPropertyType(value);

    if (
      value !==
      "residential"
    ) {
      setResidentialInspectionType(
        ""
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12"
    >
      <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <Field label="Name">
          <input
            type="text"
            required
            value={name}
            onChange={(
              event
            ) =>
              setName(
                event.target
                  .value
              )
            }
            className={
              inputClass
            }
            placeholder="Your name"
          />
        </Field>

        <Field label="Phone">
          <input
            type="tel"
            required
            value={phone}
            onChange={(
              event
            ) =>
              setPhone(
                event.target
                  .value
              )
            }
            className={
              inputClass
            }
            placeholder="Phone number"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            required
            value={email}
            onChange={(
              event
            ) =>
              setEmail(
                event.target
                  .value
              )
            }
            className={
              inputClass
            }
            placeholder="Email address"
          />
        </Field>

        <Field label="Project Location">
          <input
            type="text"
            required
            value={location}
            onChange={(
              event
            ) =>
              setLocation(
                event.target
                  .value
              )
            }
            className={
              inputClass
            }
            placeholder="Suburb / city"
          />
        </Field>

        {/* Project type */}
        <div className="sm:col-span-2">
          <Field label="Project Type">
            <select
              required
              value={
                projectType
              }
              onChange={(
                event
              ) =>
                handleProjectTypeChange(
                  event.target
                    .value
                )
              }
              className={
                inputClass
              }
            >
              <option value="">
                Select a project
                type
              </option>

              <option value="Asbestos Inspection">
                Asbestos
                Inspection
              </option>

              <option value="Asbestos Removal">
                Asbestos Removal
              </option>

              <option value="Demolition">
                Demolition
              </option>

              <option value="Earthworks">
                Earthworks
              </option>

              <option value="Public Drainage">
                Public Drainage
              </option>

              <option value="Private Drainage & Plumbing">
                Private Drainage & Plumbing
              </option>

              <option value="All-in-One">
                All-in-One
              </option>

              <option value="Multiple Services">
                Multiple Services / Full-Site Project
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </Field>
        </div>

        {/* ---------------------------------------
            ASBESTOS INSPECTION QUESTIONS
        ---------------------------------------- */}
        {isAsbestosInspection && (
          <>
            <div className="sm:col-span-2">
              <Field label="Property Type">
                <select
                  required
                  value={
                    propertyType
                  }
                  onChange={(
                    event
                  ) =>
                    handlePropertyTypeChange(
                      event
                        .target
                        .value as PropertyType
                    )
                  }
                  className={
                    inputClass
                  }
                >
                  <option value="">
                    Select property
                    type
                  </option>

                  <option value="residential">
                    Residential
                  </option>

                  <option value="commercial">
                    Commercial /
                    Public
                  </option>
                </select>
              </Field>
            </div>

            {propertyType ===
              "residential" && (
              <div className="sm:col-span-2">
                <Field label="Inspection Purpose">
                  <select
                    required
                    value={
                      residentialInspectionType
                    }
                    onChange={(
                      event
                    ) =>
                      setResidentialInspectionType(
                        event
                          .target
                          .value as ResidentialInspectionType
                      )
                    }
                    className={
                      inputClass
                    }
                  >
                    <option value="">
                      Select inspection
                      purpose
                    </option>

                    <option value="demolition">
                      Demolition
                    </option>

                    <option value="relocation">
                      House
                      Relocation
                    </option>

                    <option value="renovation">
                      Renovation
                    </option>
                  </select>
                </Field>
              </div>
            )}
          </>
        )}

        {/* Details */}
        <div className="sm:col-span-2">
          <Field label="Project Details">
            <textarea
              required
              value={
                details
              }
              onChange={(
                event
              ) =>
                setDetails(
                  event.target
                    .value
                )
              }
              rows={7}
              className={`${inputClass} resize-y`}
              placeholder="Tell us briefly about the site, work required, timing or anything else that may be useful."
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-neutral-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[480px] text-xs leading-6 text-neutral-400">
          Have plans, reports or
          site photos? You can
          include those when
          contacting SLINE.
        </p>

        <button
          type="submit"
          className="group inline-flex min-h-[58px] min-w-[240px] items-center justify-between gap-8 bg-[#d32329] px-7 text-xs font-black uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:scale-[1.025]"
        >
          Send Enquiry

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "min-h-[54px] w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-300 focus:border-[#d32329]";

function Field({
  label,
  children,
}: {
  label: string;
  children:
    React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.17em] text-neutral-500">
        {label}
      </span>

      {children}
    </label>
  );
}