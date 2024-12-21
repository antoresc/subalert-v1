"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession, SessionProvider } from "next-auth/react";
import { Crisp } from "crisp-sdk-web";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";

// Crisp customer chat support:
const CrispChat = () => {
  const pathname = usePathname();
  const { data } = useSession();

  useEffect(() => {
    if (config?.crisp?.id) {
      Crisp.configure(config.crisp.id);
      if (config.crisp.onlyShowOnRoutes && !config.crisp.onlyShowOnRoutes.includes(pathname)) {
        Crisp.chat.hide();
        Crisp.chat.onChatClosed(() => {
          Crisp.chat.hide();
        });
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (data?.user && config?.crisp?.id) {
      Crisp.session.setData({ userId: data.user?.id });
    }
  }, [data]);

  return null;
};

const ClientLayout = ({ children }) => {
  return (
    <SessionProvider>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      {children}
      <Toaster toastOptions={{ duration: 3000 }} />
      <Tooltip id="tooltip" className="z-[60] !opacity-100 max-w-sm shadow-lg" />
      <CrispChat />
    </SessionProvider>
  );
};

export default ClientLayout;
