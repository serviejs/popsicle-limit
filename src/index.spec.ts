import { compose } from "throwback";
import { toFetch } from "popsicle/dist/common";
import { Request, Response } from "servie/dist/node";
import * as limits from "./index";

describe("popsicle limit", function() {
  const fetch = toFetch(
    compose<Request, Response>([
      limits.limit(1, 500),
      req => new Response(req.stream())
    ]),
    Request
  );

  it("should rate limit api calls", async () => {
    const start = Date.now();

    await fetch("/");
    expect(Date.now() - start).toBeGreaterThan(0);

    await fetch("/");
    expect(Date.now() - start).toBeGreaterThan(500);

    await fetch("/");
    expect(Date.now() - start).toBeGreaterThan(1000);
  });

  it("provide common short cuts", () => {
    expect(typeof limits.SECOND).toEqual("number");
    expect(typeof limits.MINUTE).toEqual("number");
    expect(typeof limits.HOUR).toEqual("number");
    expect(typeof limits.DAY).toEqual("number");
    expect(typeof limits.WEEK).toEqual("number");
  });
});
