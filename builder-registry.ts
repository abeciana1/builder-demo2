"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import { Heading1 } from '@/components/_styled/Headings'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Heading1, {
  name: "Heading1",
  inputs: [
    {
      name: "text",
      type: "string",
    },
  ],
})

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
