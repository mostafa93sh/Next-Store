"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";
const intialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, intialState);
  useEffect(() => {
    if (state.message) {
      toast(state.message, {
        description: state.message,
        style: {
          color: "black",
          border: "solid 1px #aaa",
        },
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
