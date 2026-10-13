"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    checkRole();
  }, []);

  async function checkRole() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("user_roles")
      .select("*")
      .eq("email", user?.email)
      .single();

    if (data?.role === "admin") {
      setAllowed(true);
    }
  }

  if (!allowed)
    return (
      <div className="p-10">
        Access Denied
      </div>
    );

  return <>{children}</>;
}