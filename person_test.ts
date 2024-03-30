import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import Person, { sayHello } from "./person.ts";

Deno.test("sayHello function", () => {
  const grace: Person = {
    lastName: "Hopper",
    firstName: "Grace",
  };

  assertEquals("Hello, Grace Hopper!", sayHello(grace));
});

// deno test person_test.ts
