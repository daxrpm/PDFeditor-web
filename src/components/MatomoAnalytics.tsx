"use client";

import { useMatomo } from "@/hooks/useMatomo";

export default function MatomoAnalytics() {
  useMatomo({
    url: "//matomo.daxrpm.dev/",
    siteId: 2,
  });

  return null;
}
