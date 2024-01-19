"use client";

import React, { useState } from "react";
import { Dialog } from "./dialog";
import Form from "./form";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col min-w-[var(--layout-responsividad-ancho-minimo)] min-h-[var(--layout-responsividad-tablet-ancho-tablet)] items-start gap-[var(--layout-espacio-margen-vertical)] relative bg-user-interface-colors-background">
        

        <Form setSuccess={setOpen} />
      </div>
      <Dialog open={open} handleOpen={setOpen} />
    </>
  );
}
