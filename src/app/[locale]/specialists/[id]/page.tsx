"use client";

import { useEffect, useState } from "react";
import {SpecialistView} from "@/components/SpecialistView";
import axiosInstance from "@/api/axiosInstance";
import {useParams} from "next/navigation";

interface SpecialistTranslation {
    languageCode: string;
    description: string;
    education: string;
    experience: string;
    serviceRecord: string;
    specialization: string;
}

interface Specialist {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    profileImage: string; // base64
    translations: SpecialistTranslation[];
}

export default function SpecialistPageClient() {
    const {id} = useParams();
    const [specialist, setSpecialist] = useState<Specialist | null>(null);

    useEffect(() => {
        axiosInstance.get(`/doctors/${id}`).then(({ data }) => {
            setSpecialist(data);
        });
    }, [id]);

    if (!specialist) return <div>Loading...</div>;

    return <SpecialistView specialist={specialist} />;
}
