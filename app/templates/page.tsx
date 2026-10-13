"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TemplatesPage() {
  const [workspaceId, setWorkspaceId