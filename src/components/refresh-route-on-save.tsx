"use client";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import React from "react";

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={
        "https://" + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
        "http://localhost:3000"
      }
    />
  );
};
