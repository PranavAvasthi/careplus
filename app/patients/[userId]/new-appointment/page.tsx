import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="CarePulse Logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright mt-10 py-12">
            &copy; CarePulse Copyright 2024
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={10000}
        alt="Appointment Image"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
