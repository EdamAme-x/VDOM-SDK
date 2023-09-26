///<reference lib="dom"/>
///<reference lib="dom.iterable"/>

import {
  DOMParser
} from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";

Deno.test(function CanTest() {
  assertEquals(2 + 3, 5);
});

Deno.test(function CanParse() {
  const parser = new DOMParser();
  const vdom = parser.parseFromString("<vdom></vdom>", "text/html");
  console.log(element);
})