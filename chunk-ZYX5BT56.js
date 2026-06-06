import {
  a as mt,
  b as Kt,
  d as bt,
  e as Qt,
  f as er,
  i as tr,
  k as rr,
  l as nr,
  m as or,
} from "./chunk-EHFOJIRP.js";
import { a as v, b as A, d as L, l as E } from "./chunk-UUTKIRVD.js";
function J(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
var yt = [
    {
      inputs: [
        {
          components: [
            { name: "target", type: "address" },
            { name: "allowFailure", type: "bool" },
            { name: "callData", type: "bytes" },
          ],
          name: "calls",
          type: "tuple[]",
        },
      ],
      name: "aggregate3",
      outputs: [
        {
          components: [
            { name: "success", type: "bool" },
            { name: "returnData", type: "bytes" },
          ],
          name: "returnData",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  ir = [
    { inputs: [], name: "ResolverNotFound", type: "error" },
    { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
    { inputs: [], name: "ResolverNotContract", type: "error" },
    {
      inputs: [{ name: "returnData", type: "bytes" }],
      name: "ResolverError",
      type: "error",
    },
    {
      inputs: [
        {
          components: [
            { name: "status", type: "uint16" },
            { name: "message", type: "string" },
          ],
          name: "errors",
          type: "tuple[]",
        },
      ],
      name: "HttpError",
      type: "error",
    },
  ],
  bo = [
    ...ir,
    {
      name: "resolve",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes" },
        { name: "data", type: "bytes" },
      ],
      outputs: [
        { name: "", type: "bytes" },
        { name: "address", type: "address" },
      ],
    },
    {
      name: "resolve",
      type: "function",
      stateMutability: "view",
      inputs: [
        { name: "name", type: "bytes" },
        { name: "data", type: "bytes" },
        { name: "gateways", type: "string[]" },
      ],
      outputs: [
        { name: "", type: "bytes" },
        { name: "address", type: "address" },
      ],
    },
  ],
  yo = [
    ...ir,
    {
      name: "reverse",
      type: "function",
      stateMutability: "view",
      inputs: [{ type: "bytes", name: "reverseName" }],
      outputs: [
        { type: "string", name: "resolvedName" },
        { type: "address", name: "resolvedAddress" },
        { type: "address", name: "reverseResolver" },
        { type: "address", name: "resolver" },
      ],
    },
    {
      name: "reverse",
      type: "function",
      stateMutability: "view",
      inputs: [
        { type: "bytes", name: "reverseName" },
        { type: "string[]", name: "gateways" },
      ],
      outputs: [
        { type: "string", name: "resolvedName" },
        { type: "address", name: "resolvedAddress" },
        { type: "address", name: "reverseResolver" },
        { type: "address", name: "resolver" },
      ],
    },
  ];
var sr = "0x82ad56cb";
var ar = "2.9.32";
var ur = (e) => e,
  V = (e) => e,
  cr = () => `viem@${ar}`;
var u = class e extends Error {
  constructor(t, r = {}) {
    super(),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ViemError",
      }),
      Object.defineProperty(this, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: cr(),
      });
    let n =
        r.cause instanceof e
          ? r.cause.details
          : r.cause?.message
          ? r.cause.message
          : r.details,
      o = (r.cause instanceof e && r.cause.docsPath) || r.docsPath;
    (this.message = [
      t || "An error occurred.",
      "",
      ...(r.metaMessages ? [...r.metaMessages, ""] : []),
      ...(o
        ? [`Docs: https://viem.sh${o}${r.docsSlug ? `#${r.docsSlug}` : ""}`]
        : []),
      ...(n ? [`Details: ${n}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      r.cause && (this.cause = r.cause),
      (this.details = n),
      (this.docsPath = o),
      (this.metaMessages = r.metaMessages),
      (this.shortMessage = t);
  }
  walk(t) {
    return pr(this, t);
  }
};
function pr(e, t) {
  return t?.(e)
    ? e
    : e && typeof e == "object" && "cause" in e
    ? pr(e.cause, t)
    : t
    ? null
    : e;
}
var P = class extends u {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart.",
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAddressError",
      });
  }
};
var W = class extends u {
    constructor({ blockNumber: t, chain: r, contract: n }) {
      super(`Chain "${r.name}" does not support contract "${n.name}".`, {
        metaMessages: [
          "This could be due to any of the following:",
          ...(t && n.blockCreated && n.blockCreated > t
            ? [
                `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${t}).`,
              ]
            : [
                `- The chain does not have the contract "${n.name}" configured.`,
              ]),
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ChainDoesNotSupportContract",
        });
    }
  },
  lr = class extends u {
    constructor({ chain: t, currentChainId: r }) {
      super(
        `The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${t.id} \u2013 ${t.name}).`,
        {
          metaMessages: [
            `Current Chain ID:  ${r}`,
            `Expected Chain ID: ${t.id} \u2013 ${t.name}`,
          ],
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ChainMismatchError",
        });
    }
  },
  dr = class extends u {
    constructor() {
      super(
        [
          "No chain was provided to the request.",
          "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ChainNotFoundError",
        });
    }
  },
  ye = class extends u {
    constructor() {
      super("No chain was provided to the Client."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ClientChainNotConfiguredError",
        });
    }
  };
var fr = {
    1: "An `assert` condition failed.",
    17: "Arithmetic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type.",
  },
  mr = {
    inputs: [{ name: "message", type: "string" }],
    name: "Error",
    type: "error",
  },
  br = {
    inputs: [{ name: "reason", type: "uint256" }],
    name: "Panic",
    type: "error",
  };
function T(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new Te(e.type);
  return `${e.name}(${Ee(e.inputs, { includeName: t })})`;
}
function Ee(e, { includeName: t = !1 } = {}) {
  return e ? e.map((r) => vn(r, { includeName: t })).join(t ? ", " : ",") : "";
}
function vn(e, { includeName: t }) {
  return e.type.startsWith("tuple")
    ? `(${Ee(e.components, { includeName: t })})${e.type.slice(5)}`
    : e.type + (t && e.name ? ` ${e.name}` : "");
}
function j(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string"
    ? !1
    : t
    ? /^0x[0-9a-fA-F]*$/.test(e)
    : e.startsWith("0x");
}
function g(e) {
  return j(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
var Be = class extends u {
  constructor({ data: t, params: r, size: n }) {
    super(
      [`Data size of ${n} bytes is too small for given parameters.`].join(`
`),
      {
        metaMessages: [
          `Params: (${Ee(r, { includeName: !0 })})`,
          `Data:   ${t} (${n} bytes)`,
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiDecodingDataSizeTooSmallError",
      }),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "params", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "size", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = t),
      (this.params = r),
      (this.size = n);
  }
};
var Y = class extends u {
    constructor() {
      super('Cannot decode zero data ("0x") with ABI parameters.'),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiDecodingZeroDataError",
        });
    }
  },
  ke = class extends u {
    constructor({ expectedLength: t, givenLength: r, type: n }) {
      super(
        [
          `ABI encoding array length mismatch for type ${n}.`,
          `Expected length: ${t}`,
          `Given length: ${r}`,
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEncodingArrayLengthMismatchError",
        });
    }
  },
  Se = class extends u {
    constructor({ expectedSize: t, value: r }) {
      super(
        `Size of bytes "${r}" (bytes${g(
          r
        )}) does not match expected size (bytes${t}).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEncodingBytesSizeMismatchError",
        });
    }
  },
  Ie = class extends u {
    constructor({ expectedLength: t, givenLength: r }) {
      super(
        [
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${t}`,
          `Given length (values): ${r}`,
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiEncodingLengthMismatchError",
        });
    }
  };
var Z = class extends u {
  constructor(t, { docsPath: r }) {
    super(
      [
        `Encoded error signature "${t}" not found on ABI.`,
        "Make sure you are using the correct ABI and that the error exists on it.",
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`,
      ].join(`
`),
      { docsPath: r }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiErrorSignatureNotFoundError",
      }),
      Object.defineProperty(this, "signature", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.signature = t);
  }
};
var F = class extends u {
    constructor(t, { docsPath: r } = {}) {
      super(
        [
          `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiFunctionNotFoundError",
        });
    }
  },
  ze = class extends u {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Function "${t}" does not contain any \`outputs\` on ABI.`,
          "Cannot decode function result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the function exists on it.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AbiFunctionOutputsNotFoundError",
        });
    }
  };
var Re = class extends u {
  constructor(t, r) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${t.type}\` in \`${T(t.abiItem)}\`, and`,
        `\`${r.type}\` in \`${T(r.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI.",
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiItemAmbiguityError",
      });
  }
};
var Ce = class extends u {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Type "${t}" is not a valid encoding type.`,
          "Please provide a valid ABI type.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiEncodingType",
        });
    }
  },
  Le = class extends u {
    constructor(t, { docsPath: r }) {
      super(
        [
          `Type "${t}" is not a valid decoding type.`,
          "Please provide a valid ABI type.",
        ].join(`
`),
        { docsPath: r }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidAbiDecodingType",
        });
    }
  },
  Fe = class extends u {
    constructor(t) {
      super(
        [`Value "${t}" is not a valid array.`].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidArrayError",
        });
    }
  },
  Te = class extends u {
    constructor(t) {
      super(
        [
          `"${t}" is not a valid definition type.`,
          'Valid types: "function", "event", "error"',
        ].join(`
`)
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidDefinitionTypeError",
        });
    }
  };
var he = class extends u {
    constructor({ offset: t, position: r, size: n }) {
      super(
        `Slice ${
          r === "start" ? "starting" : "ending"
        } at offset "${t}" is out-of-bounds (size: ${n}).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SliceOffsetOutOfBoundsError",
        });
    }
  },
  ge = class extends u {
    constructor({ size: t, targetSize: r, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} size (${t}) exceeds padding size (${r}).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "SizeExceedsPaddingSizeError",
        });
    }
  },
  xe = class extends u {
    constructor({ size: t, targetSize: r, type: n }) {
      super(
        `${n.charAt(0).toUpperCase()}${n
          .slice(1)
          .toLowerCase()} is expected to be ${r} ${n} long, but is ${t} ${n} long.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidBytesLengthError",
        });
    }
  };
function q(e, t, r, { strict: n } = {}) {
  return j(e, { strict: !1 })
    ? Pn(e, t, r, { strict: n })
    : ht(e, t, r, { strict: n });
}
function yr(e, t) {
  if (typeof t == "number" && t > 0 && t > g(e) - 1)
    throw new he({ offset: t, position: "start", size: g(e) });
}
function hr(e, t, r) {
  if (typeof t == "number" && typeof r == "number" && g(e) !== r - t)
    throw new he({ offset: r, position: "end", size: g(e) });
}
function ht(e, t, r, { strict: n } = {}) {
  yr(e, t);
  let o = e.slice(t, r);
  return n && hr(o, t, r), o;
}
function Pn(e, t, r, { strict: n } = {}) {
  yr(e, t);
  let o = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
  return n && hr(o, t, r), o;
}
function H(e, { dir: t, size: r = 32 } = {}) {
  return typeof e == "string"
    ? I(e, { dir: t, size: r })
    : $n(e, { dir: t, size: r });
}
function I(e, { dir: t, size: r = 32 } = {}) {
  if (r === null) return e;
  let n = e.replace("0x", "");
  if (n.length > r * 2)
    throw new ge({ size: Math.ceil(n.length / 2), targetSize: r, type: "hex" });
  return `0x${n[t === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function $n(e, { dir: t, size: r = 32 } = {}) {
  if (r === null) return e;
  if (e.length > r)
    throw new ge({ size: e.length, targetSize: r, type: "bytes" });
  let n = new Uint8Array(r);
  for (let o = 0; o < r; o++) {
    let i = t === "right";
    n[i ? o : r - o - 1] = e[i ? o : e.length - o - 1];
  }
  return n;
}
var He = class extends u {
    constructor({ max: t, min: r, signed: n, size: o, value: i }) {
      super(
        `Number "${i}" is not in safe ${
          o ? `${o * 8}-bit ${n ? "signed" : "unsigned"} ` : ""
        }integer range ${t ? `(${r} to ${t})` : `(above ${r})`}`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "IntegerOutOfRangeError",
        });
    }
  },
  Ue = class extends u {
    constructor(t) {
      super(
        `Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "InvalidBytesBooleanError",
        });
    }
  };
var Ne = class extends u {
  constructor({ givenSize: t, maxSize: r }) {
    super(`Size cannot exceed ${r} bytes. Given size: ${t} bytes.`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SizeOverflowError",
      });
  }
};
function X(e, { dir: t = "left" } = {}) {
  let r = typeof e == "string" ? e.replace("0x", "") : e,
    n = 0;
  for (
    let o = 0;
    o < r.length - 1 &&
    r[t === "left" ? o : r.length - o - 1].toString() === "0";
    o++
  )
    n++;
  return (
    (r = t === "left" ? r.slice(n) : r.slice(0, r.length - n)),
    typeof e == "string"
      ? (r.length === 1 && t === "right" && (r = `${r}0`),
        `0x${r.length % 2 === 1 ? `0${r}` : r}`)
      : r
  );
}
function $(e, { size: t }) {
  if (g(e) > t) throw new Ne({ givenSize: g(e), maxSize: t });
}
function gt(e, t = {}) {
  let { signed: r } = t;
  t.size && $(e, { size: t.size });
  let n = BigInt(e);
  if (!r) return n;
  let o = (e.length - 2) / 2,
    i = (1n << (BigInt(o) * 8n - 1n)) - 1n;
  return n <= i ? n : n - BigInt(`0x${"f".padStart(o * 2, "f")}`) - 1n;
}
function gr(e, t = {}) {
  return Number(gt(e, t));
}
function ei(e, t = {}) {
  let r = K(e);
  return (
    t.size && ($(r, { size: t.size }), (r = X(r, { dir: "right" }))),
    new TextDecoder().decode(r)
  );
}
var An = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function xr(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? y(e, t)
    : typeof e == "string"
    ? wt(e, t)
    : typeof e == "boolean"
    ? xt(e, t)
    : M(e, t);
}
function xt(e, t = {}) {
  let r = `0x${Number(e)}`;
  return typeof t.size == "number"
    ? ($(r, { size: t.size }), H(r, { size: t.size }))
    : r;
}
function M(e, t = {}) {
  let r = "";
  for (let o = 0; o < e.length; o++) r += An[e[o]];
  let n = `0x${r}`;
  return typeof t.size == "number"
    ? ($(n, { size: t.size }), H(n, { dir: "right", size: t.size }))
    : n;
}
function y(e, t = {}) {
  let { signed: r, size: n } = t,
    o = BigInt(e),
    i;
  n
    ? r
      ? (i = (1n << (BigInt(n) * 8n - 1n)) - 1n)
      : (i = 2n ** (BigInt(n) * 8n) - 1n)
    : typeof e == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
  let s = typeof i == "bigint" && r ? -i - 1n : 0;
  if ((i && o > i) || o < s) {
    let c = typeof e == "bigint" ? "n" : "";
    throw new He({
      max: i ? `${i}${c}` : void 0,
      min: `${s}${c}`,
      signed: r,
      size: n,
      value: `${e}${c}`,
    });
  }
  let a = `0x${(r && o < 0 ? (1n << BigInt(n * 8)) + BigInt(o) : o).toString(
    16
  )}`;
  return n ? H(a, { size: n }) : a;
}
var On = new TextEncoder();
function wt(e, t = {}) {
  let r = On.encode(e);
  return M(r, t);
}
var jn = new TextEncoder();
function De(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint"
    ? En(e, t)
    : typeof e == "boolean"
    ? Mn(e, t)
    : j(e)
    ? K(e, t)
    : vt(e, t);
}
function Mn(e, t = {}) {
  let r = new Uint8Array(1);
  return (
    (r[0] = Number(e)),
    typeof t.size == "number"
      ? ($(r, { size: t.size }), H(r, { size: t.size }))
      : r
  );
}
var z = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function wr(e) {
  if (e >= z.zero && e <= z.nine) return e - z.zero;
  if (e >= z.A && e <= z.F) return e - (z.A - 10);
  if (e >= z.a && e <= z.f) return e - (z.a - 10);
}
function K(e, t = {}) {
  let r = e;
  t.size &&
    ($(r, { size: t.size }), (r = H(r, { dir: "right", size: t.size })));
  let n = r.slice(2);
  n.length % 2 && (n = `0${n}`);
  let o = n.length / 2,
    i = new Uint8Array(o);
  for (let s = 0, a = 0; s < o; s++) {
    let c = wr(n.charCodeAt(a++)),
      p = wr(n.charCodeAt(a++));
    if (c === void 0 || p === void 0)
      throw new u(
        `Invalid byte sequence ("${n[a - 2]}${n[a - 1]}" in "${n}").`
      );
    i[s] = c * 16 + p;
  }
  return i;
}
function En(e, t) {
  let r = y(e, t);
  return K(r);
}
function vt(e, t = {}) {
  let r = jn.encode(e);
  return typeof t.size == "number"
    ? ($(r, { size: t.size }), H(r, { dir: "right", size: t.size }))
    : r;
}
var Ge = BigInt(4294967295),
  vr = BigInt(32);
function Tn(e, t = !1) {
  return t
    ? { h: Number(e & Ge), l: Number((e >> vr) & Ge) }
    : { h: Number((e >> vr) & Ge) | 0, l: Number(e & Ge) | 0 };
}
function Pr(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    let { h: i, l: s } = Tn(e[o], t);
    [r[o], n[o]] = [i, s];
  }
  return [r, n];
}
var $r = (e, t, r) => (e << r) | (t >>> (32 - r)),
  Ar = (e, t, r) => (t << r) | (e >>> (32 - r)),
  Or = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  jr = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
var [Tr, Br, kr] = [[], [], []],
  Bn = BigInt(0),
  we = BigInt(1),
  kn = BigInt(2),
  Sn = BigInt(7),
  In = BigInt(256),
  zn = BigInt(113);
for (let e = 0, t = we, r = 1, n = 0; e < 24; e++) {
  ([r, n] = [n, (2 * r + 3 * n) % 5]),
    Tr.push(2 * (5 * n + r)),
    Br.push((((e + 1) * (e + 2)) / 2) % 64);
  let o = Bn;
  for (let i = 0; i < 7; i++)
    (t = ((t << we) ^ ((t >> Sn) * zn)) % In),
      t & kn && (o ^= we << ((we << BigInt(i)) - we));
  kr.push(o);
}
var [Rn, Cn] = Pr(kr, !0),
  Mr = (e, t, r) => (r > 32 ? Or(e, t, r) : $r(e, t, r)),
  Er = (e, t, r) => (r > 32 ? jr(e, t, r) : Ar(e, t, r));
function Ln(e, t = 24) {
  let r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let s = 0; s < 10; s++)
      r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
    for (let s = 0; s < 10; s += 2) {
      let a = (s + 8) % 10,
        c = (s + 2) % 10,
        p = r[c],
        l = r[c + 1],
        d = Mr(p, l, 1) ^ r[a],
        m = Er(p, l, 1) ^ r[a + 1];
      for (let f = 0; f < 50; f += 10) (e[s + f] ^= d), (e[s + f + 1] ^= m);
    }
    let o = e[2],
      i = e[3];
    for (let s = 0; s < 24; s++) {
      let a = Br[s],
        c = Mr(o, i, a),
        p = Er(o, i, a),
        l = Tr[s];
      (o = e[l]), (i = e[l + 1]), (e[l] = c), (e[l + 1] = p);
    }
    for (let s = 0; s < 50; s += 10) {
      for (let a = 0; a < 10; a++) r[a] = e[s + a];
      for (let a = 0; a < 10; a++)
        e[s + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    (e[0] ^= Rn[n]), (e[1] ^= Cn[n]);
  }
  r.fill(0);
}
var _e = class e extends rr {
    constructor(t, r, n, o = !1, i = 24) {
      if (
        (super(),
        (this.blockLen = t),
        (this.suffix = r),
        (this.outputLen = n),
        (this.enableXOF = o),
        (this.rounds = i),
        (this.pos = 0),
        (this.posOut = 0),
        (this.finished = !1),
        (this.destroyed = !1),
        mt(n),
        0 >= this.blockLen || this.blockLen >= 200)
      )
        throw new Error("Sha3 supports only keccak-f1600 function");
      (this.state = new Uint8Array(200)), (this.state32 = er(this.state));
    }
    keccak() {
      Ln(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
    }
    update(t) {
      bt(this);
      let { blockLen: r, state: n } = this;
      t = tr(t);
      let o = t.length;
      for (let i = 0; i < o; ) {
        let s = Math.min(r - this.pos, o - i);
        for (let a = 0; a < s; a++) n[this.pos++] ^= t[i++];
        this.pos === r && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = !0;
      let { state: t, suffix: r, pos: n, blockLen: o } = this;
      (t[n] ^= r),
        r & 128 && n === o - 1 && this.keccak(),
        (t[o - 1] ^= 128),
        this.keccak();
    }
    writeInto(t) {
      bt(this, !1), Kt(t), this.finish();
      let r = this.state,
        { blockLen: n } = this;
      for (let o = 0, i = t.length; o < i; ) {
        this.posOut >= n && this.keccak();
        let s = Math.min(n - this.posOut, i - o);
        t.set(r.subarray(this.posOut, this.posOut + s), o),
          (this.posOut += s),
          (o += s);
      }
      return t;
    }
    xofInto(t) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(t);
    }
    xof(t) {
      return mt(t), this.xofInto(new Uint8Array(t));
    }
    digestInto(t) {
      if ((Qt(t, this), this.finished))
        throw new Error("digest() was already called");
      return this.writeInto(t), this.destroy(), t;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      (this.destroyed = !0), this.state.fill(0);
    }
    _cloneInto(t) {
      let {
        blockLen: r,
        suffix: n,
        outputLen: o,
        rounds: i,
        enableXOF: s,
      } = this;
      return (
        t || (t = new e(r, n, o, s, i)),
        t.state32.set(this.state32),
        (t.pos = this.pos),
        (t.posOut = this.posOut),
        (t.finished = this.finished),
        (t.rounds = i),
        (t.suffix = n),
        (t.outputLen = o),
        (t.enableXOF = s),
        (t.destroyed = this.destroyed),
        t
      );
    }
  },
  U = (e, t, r) => nr(() => new _e(t, e, r)),
  yi = U(6, 144, 224 / 8),
  hi = U(6, 136, 256 / 8),
  gi = U(6, 104, 384 / 8),
  xi = U(6, 72, 512 / 8),
  wi = U(1, 144, 224 / 8),
  Sr = U(1, 136, 256 / 8),
  vi = U(1, 104, 384 / 8),
  Pi = U(1, 72, 512 / 8),
  Ir = (e, t, r) =>
    or((n = {}) => new _e(t, e, n.dkLen === void 0 ? r : n.dkLen, !0)),
  $i = Ir(31, 168, 128 / 8),
  Ai = Ir(31, 136, 256 / 8);
function Ve(e, t) {
  let r = t || "hex",
    n = Sr(j(e, { strict: !1 }) ? De(e) : e);
  return r === "bytes" ? n : xr(n);
}
var Fn = (e) => Ve(De(e));
function zr(e) {
  return Fn(e);
}
function Rr(e, t) {
  return e.exec(t)?.groups;
}
var Cr = /^tuple(?<array>(\[(\d*)\])*)$/;
function We(e) {
  let t = e.type;
  if (Cr.test(e.type) && "components" in e) {
    t = "(";
    let r = e.components.length;
    for (let o = 0; o < r; o++) {
      let i = e.components[o];
      (t += We(i)), o < r - 1 && (t += ", ");
    }
    let n = Rr(Cr, e.type);
    return (t += `)${n?.array ?? ""}`), We(A(v({}, e), { type: t }));
  }
  return (
    "indexed" in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
  );
}
function Q(e) {
  let t = "",
    r = e.length;
  for (let n = 0; n < r; n++) {
    let o = e[n];
    (t += We(o)), n !== r - 1 && (t += ", ");
  }
  return t;
}
function Pt(e) {
  return e.type === "function"
    ? `function ${e.name}(${Q(e.inputs)})${
        e.stateMutability && e.stateMutability !== "nonpayable"
          ? ` ${e.stateMutability}`
          : ""
      }${e.outputs.length ? ` returns (${Q(e.outputs)})` : ""}`
    : e.type === "event"
    ? `event ${e.name}(${Q(e.inputs)})`
    : e.type === "error"
    ? `error ${e.name}(${Q(e.inputs)})`
    : e.type === "constructor"
    ? `constructor(${Q(e.inputs)})${
        e.stateMutability === "payable" ? " payable" : ""
      }`
    : e.type === "fallback"
    ? "fallback()"
    : "receive() external payable";
}
function Lr(e) {
  let t = !0,
    r = "",
    n = 0,
    o = "",
    i = !1;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    if (
      (["(", ")", ","].includes(a) && (t = !0),
      a === "(" && n++,
      a === ")" && n--,
      !!t)
    ) {
      if (n === 0) {
        if (a === " " && ["event", "function", ""].includes(o)) o = "";
        else if (((o += a), a === ")")) {
          i = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        e[s - 1] !== "," && r !== "," && r !== ",(" && ((r = ""), (t = !1));
        continue;
      }
      (o += a), (r += a);
    }
  }
  if (!i) throw new u("Unable to normalize signature.");
  return o;
}
var Fr = (e) => {
  let t = typeof e == "string" ? e : Pt(e);
  return Lr(t);
};
function qe(e) {
  return zr(Fr(e));
}
var ee = (e) => q(qe(e), 0, 4);
var Xe = class extends Map {
  constructor(t) {
    super(),
      Object.defineProperty(this, "maxSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.maxSize = t);
  }
  set(t, r) {
    return (
      super.set(t, r),
      this.maxSize &&
        this.size > this.maxSize &&
        this.delete(this.keys().next().value),
      this
    );
  }
};
var Hn = /^0x[a-fA-F0-9]{40}$/,
  $t = new Xe(8192);
function x(e, t) {
  let { strict: r = !0 } = t ?? {};
  if ($t.has(e)) return $t.get(e);
  let n = Hn.test(e) ? (e.toLowerCase() === e ? !0 : r ? ve(e) === e : !0) : !1;
  return $t.set(e, n), n;
}
function ve(e, t) {
  let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
    n = Ve(vt(r), "bytes"),
    o = (t ? r.substring(`${t}0x`.length) : r).split("");
  for (let i = 0; i < 40; i += 2)
    n[i >> 1] >> 4 >= 8 && o[i] && (o[i] = o[i].toUpperCase()),
      (n[i >> 1] & 15) >= 8 && o[i + 1] && (o[i + 1] = o[i + 1].toUpperCase());
  return `0x${o.join("")}`;
}
function cs(e, t) {
  if (!x(e, { strict: !1 })) throw new P({ address: e });
  return ve(e, t);
}
var Pe = class extends u {
    constructor({ offset: t }) {
      super(`Offset \`${t}\` cannot be negative.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "NegativeOffsetError",
        });
    }
  },
  Je = class extends u {
    constructor({ length: t, position: r }) {
      super(`Position \`${r}\` is out of bounds (\`0 < position < ${t}\`).`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "PositionOutOfBoundsError",
        });
    }
  },
  Ye = class extends u {
    constructor({ count: t, limit: r }) {
      super(
        `Recursive read limit of \`${r}\` exceeded (recursive read count: \`${t}\`).`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RecursiveReadLimitExceededError",
        });
    }
  };
var Un = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: 1 / 0,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new Ye({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Je({ length: this.bytes.length, position: e });
  },
  decrementPosition(e) {
    if (e < 0) throw new Pe({ offset: e });
    let t = this.position - e;
    this.assertPosition(t), (this.position = t);
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0) throw new Pe({ offset: e });
    let t = this.position + e;
    this.assertPosition(t), (this.position = t);
  },
  inspectByte(e) {
    let t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    let r = t ?? this.position;
    return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
  },
  inspectUint8(e) {
    let t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    let t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    let t = e ?? this.position;
    return (
      this.assertPosition(t + 2),
      (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    );
  },
  inspectUint32(e) {
    let t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1),
      this.bytes.set(e, this.position),
      (this.position += e.length);
  },
  pushUint8(e) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = e),
      this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1),
      this.dataView.setUint16(this.position, e),
      (this.position += 2);
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2),
      this.dataView.setUint16(this.position, e >> 8),
      this.dataView.setUint8(this.position + 2, e & 255),
      (this.position += 3);
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3),
      this.dataView.setUint32(this.position, e),
      (this.position += 4);
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    let r = this.inspectBytes(e);
    return (this.position += t ?? e), r;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint8();
    return (this.position += 1), e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint16();
    return (this.position += 2), e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint24();
    return (this.position += 3), e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    let e = this.inspectUint32();
    return (this.position += 4), e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    let t = this.position;
    return (
      this.assertPosition(e), (this.position = e), () => (this.position = t)
    );
  },
  _touch() {
    if (this.recursiveReadLimit === 1 / 0) return;
    let e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1),
      e > 0 && this.recursiveReadCount++;
  },
};
function Hr(e, { recursiveReadLimit: t = 8192 } = {}) {
  let r = Object.create(Un);
  return (
    (r.bytes = e),
    (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
    (r.positionReadCount = new Map()),
    (r.recursiveReadLimit = t),
    r
  );
}
function Ur(e, t = {}) {
  typeof t.size < "u" && $(e, { size: t.size });
  let r = M(e, t);
  return gt(r, t);
}
function Nr(e, t = {}) {
  let r = e;
  if (
    (typeof t.size < "u" && ($(r, { size: t.size }), (r = X(r))),
    r.length > 1 || r[0] > 1)
  )
    throw new Ue(r);
  return !!r[0];
}
function B(e, t = {}) {
  typeof t.size < "u" && $(e, { size: t.size });
  let r = M(e, t);
  return gr(r, t);
}
function Dr(e, t = {}) {
  let r = e;
  return (
    typeof t.size < "u" &&
      ($(r, { size: t.size }), (r = X(r, { dir: "right" }))),
    new TextDecoder().decode(r)
  );
}
function R(e) {
  return typeof e[0] == "string" ? At(e) : Nn(e);
}
function Nn(e) {
  let t = 0;
  for (let o of e) t += o.length;
  let r = new Uint8Array(t),
    n = 0;
  for (let o of e) r.set(o, n), (n += o.length);
  return r;
}
function At(e) {
  return `0x${e.reduce((t, r) => t + r.replace("0x", ""), "")}`;
}
function Ze(e, t) {
  if (e.length !== t.length)
    throw new Ie({ expectedLength: e.length, givenLength: t.length });
  let r = Dn({ params: e, values: t }),
    n = jt(r);
  return n.length === 0 ? "0x" : n;
}
function Dn({ params: e, values: t }) {
  let r = [];
  for (let n = 0; n < e.length; n++) r.push(Ot({ param: e[n], value: t[n] }));
  return r;
}
function Ot({ param: e, value: t }) {
  let r = Ke(e.type);
  if (r) {
    let [n, o] = r;
    return _n(t, { length: n, param: A(v({}, e), { type: o }) });
  }
  if (e.type === "tuple") return Jn(t, { param: e });
  if (e.type === "address") return Gn(t);
  if (e.type === "bool") return Wn(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    let n = e.type.startsWith("int");
    return qn(t, { signed: n });
  }
  if (e.type.startsWith("bytes")) return Vn(t, { param: e });
  if (e.type === "string") return Xn(t);
  throw new Ce(e.type, { docsPath: "/docs/contract/encodeAbiParameters" });
}
function jt(e) {
  let t = 0;
  for (let i = 0; i < e.length; i++) {
    let { dynamic: s, encoded: a } = e[i];
    s ? (t += 32) : (t += g(a));
  }
  let r = [],
    n = [],
    o = 0;
  for (let i = 0; i < e.length; i++) {
    let { dynamic: s, encoded: a } = e[i];
    s ? (r.push(y(t + o, { size: 32 })), n.push(a), (o += g(a))) : r.push(a);
  }
  return R([...r, ...n]);
}
function Gn(e) {
  if (!x(e)) throw new P({ address: e });
  return { dynamic: !1, encoded: I(e.toLowerCase()) };
}
function _n(e, { length: t, param: r }) {
  let n = t === null;
  if (!Array.isArray(e)) throw new Fe(e);
  if (!n && e.length !== t)
    throw new ke({
      expectedLength: t,
      givenLength: e.length,
      type: `${r.type}[${t}]`,
    });
  let o = !1,
    i = [];
  for (let s = 0; s < e.length; s++) {
    let a = Ot({ param: r, value: e[s] });
    a.dynamic && (o = !0), i.push(a);
  }
  if (n || o) {
    let s = jt(i);
    if (n) {
      let a = y(i.length, { size: 32 });
      return { dynamic: !0, encoded: i.length > 0 ? R([a, s]) : a };
    }
    if (o) return { dynamic: !0, encoded: s };
  }
  return { dynamic: !1, encoded: R(i.map(({ encoded: s }) => s)) };
}
function Vn(e, { param: t }) {
  let [, r] = t.type.split("bytes"),
    n = g(e);
  if (!r) {
    let o = e;
    return (
      n % 32 !== 0 &&
        (o = I(o, {
          dir: "right",
          size: Math.ceil((e.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: R([I(y(n, { size: 32 })), o]) }
    );
  }
  if (n !== parseInt(r)) throw new Se({ expectedSize: parseInt(r), value: e });
  return { dynamic: !1, encoded: I(e, { dir: "right" }) };
}
function Wn(e) {
  if (typeof e != "boolean")
    throw new u(
      `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
    );
  return { dynamic: !1, encoded: I(xt(e)) };
}
function qn(e, { signed: t }) {
  return { dynamic: !1, encoded: y(e, { size: 32, signed: t }) };
}
function Xn(e) {
  let t = wt(e),
    r = Math.ceil(g(t) / 32),
    n = [];
  for (let o = 0; o < r; o++)
    n.push(I(q(t, o * 32, (o + 1) * 32), { dir: "right" }));
  return { dynamic: !0, encoded: R([I(y(g(t), { size: 32 })), ...n]) };
}
function Jn(e, { param: t }) {
  let r = !1,
    n = [];
  for (let o = 0; o < t.components.length; o++) {
    let i = t.components[o],
      s = Array.isArray(e) ? o : i.name,
      a = Ot({ param: i, value: e[s] });
    n.push(a), a.dynamic && (r = !0);
  }
  return { dynamic: r, encoded: r ? jt(n) : R(n.map(({ encoded: o }) => o)) };
}
function Ke(e) {
  let t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
}
function Qe(e, t) {
  let r = typeof t == "string" ? K(t) : t,
    n = Hr(r);
  if (g(r) === 0 && e.length > 0) throw new Y();
  if (g(t) && g(t) < 32)
    throw new Be({
      data: typeof t == "string" ? t : M(t),
      params: e,
      size: g(t),
    });
  let o = 0,
    i = [];
  for (let s = 0; s < e.length; ++s) {
    let a = e[s];
    n.setPosition(o);
    let [c, p] = te(n, a, { staticPosition: 0 });
    (o += p), i.push(c);
  }
  return i;
}
function te(e, t, { staticPosition: r }) {
  let n = Ke(t.type);
  if (n) {
    let [o, i] = n;
    return Zn(e, A(v({}, t), { type: i }), { length: o, staticPosition: r });
  }
  if (t.type === "tuple") return to(e, t, { staticPosition: r });
  if (t.type === "address") return Yn(e);
  if (t.type === "bool") return Kn(e);
  if (t.type.startsWith("bytes")) return Qn(e, t, { staticPosition: r });
  if (t.type.startsWith("uint") || t.type.startsWith("int")) return eo(e, t);
  if (t.type === "string") return ro(e, { staticPosition: r });
  throw new Le(t.type, { docsPath: "/docs/contract/decodeAbiParameters" });
}
var Gr = 32,
  Mt = 32;
function Yn(e) {
  let t = e.readBytes(32);
  return [ve(M(ht(t, -20))), 32];
}
function Zn(e, t, { length: r, staticPosition: n }) {
  if (!r) {
    let s = B(e.readBytes(Mt)),
      a = n + s,
      c = a + Gr;
    e.setPosition(a);
    let p = B(e.readBytes(Gr)),
      l = $e(t),
      d = 0,
      m = [];
    for (let f = 0; f < p; ++f) {
      e.setPosition(c + (l ? f * 32 : d));
      let [b, h] = te(e, t, { staticPosition: c });
      (d += h), m.push(b);
    }
    return e.setPosition(n + 32), [m, 32];
  }
  if ($e(t)) {
    let s = B(e.readBytes(Mt)),
      a = n + s,
      c = [];
    for (let p = 0; p < r; ++p) {
      e.setPosition(a + p * 32);
      let [l] = te(e, t, { staticPosition: a });
      c.push(l);
    }
    return e.setPosition(n + 32), [c, 32];
  }
  let o = 0,
    i = [];
  for (let s = 0; s < r; ++s) {
    let [a, c] = te(e, t, { staticPosition: n + o });
    (o += c), i.push(a);
  }
  return [i, o];
}
function Kn(e) {
  return [Nr(e.readBytes(32), { size: 32 }), 32];
}
function Qn(e, t, { staticPosition: r }) {
  let [n, o] = t.type.split("bytes");
  if (!o) {
    let s = B(e.readBytes(32));
    e.setPosition(r + s);
    let a = B(e.readBytes(32));
    if (a === 0) return e.setPosition(r + 32), ["0x", 32];
    let c = e.readBytes(a);
    return e.setPosition(r + 32), [M(c), 32];
  }
  return [M(e.readBytes(parseInt(o), 32)), 32];
}
function eo(e, t) {
  let r = t.type.startsWith("int"),
    n = parseInt(t.type.split("int")[1] || "256"),
    o = e.readBytes(32);
  return [n > 48 ? Ur(o, { signed: r }) : B(o, { signed: r }), 32];
}
function to(e, t, { staticPosition: r }) {
  let n = t.components.length === 0 || t.components.some(({ name: s }) => !s),
    o = n ? [] : {},
    i = 0;
  if ($e(t)) {
    let s = B(e.readBytes(Mt)),
      a = r + s;
    for (let c = 0; c < t.components.length; ++c) {
      let p = t.components[c];
      e.setPosition(a + i);
      let [l, d] = te(e, p, { staticPosition: a });
      (i += d), (o[n ? c : p?.name] = l);
    }
    return e.setPosition(r + 32), [o, 32];
  }
  for (let s = 0; s < t.components.length; ++s) {
    let a = t.components[s],
      [c, p] = te(e, a, { staticPosition: r });
    (o[n ? s : a?.name] = c), (i += p);
  }
  return [o, i];
}
function ro(e, { staticPosition: t }) {
  let r = B(e.readBytes(32)),
    n = t + r;
  e.setPosition(n);
  let o = B(e.readBytes(32));
  if (o === 0) return e.setPosition(t + 32), ["", 32];
  let i = e.readBytes(o, 32),
    s = Dr(X(i));
  return e.setPosition(t + 32), [s, 32];
}
function $e(e) {
  let { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]")) return !0;
  if (t === "tuple") return e.components?.some($e);
  let r = Ke(e.type);
  return !!(r && $e(A(v({}, e), { type: r[1] })));
}
function et(e) {
  let { abi: t, data: r } = e,
    n = q(r, 0, 4);
  if (n === "0x") throw new Y();
  let i = [...(t || []), mr, br].find(
    (s) => s.type === "error" && n === ee(T(s))
  );
  if (!i) throw new Z(n, { docsPath: "/docs/contract/decodeErrorResult" });
  return {
    abiItem: i,
    args:
      "inputs" in i && i.inputs && i.inputs.length > 0
        ? Qe(i.inputs, q(r, 4))
        : void 0,
    errorName: i.name,
  };
}
var k = (e, t, r) =>
  JSON.stringify(
    e,
    (n, o) => {
      let i = typeof o == "bigint" ? o.toString() : o;
      return typeof t == "function" ? t(n, i) : i;
    },
    r
  );
function Et({
  abiItem: e,
  args: t,
  includeFunctionName: r = !0,
  includeName: n = !1,
}) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${r ? e.name : ""}(${e.inputs
      .map(
        (o, i) =>
          `${n && o.name ? `${o.name}: ` : ""}${
            typeof t[i] == "object" ? k(t[i]) : t[i]
          }`
      )
      .join(", ")})`;
}
var _r = qe;
function re(e) {
  let { abi: t, args: r = [], name: n } = e,
    o = j(n, { strict: !1 }),
    i = t.filter((a) =>
      o
        ? a.type === "function"
          ? ee(a) === n
          : a.type === "event"
          ? _r(a) === n
          : !1
        : "name" in a && a.name === n
    );
  if (i.length === 0) return;
  if (i.length === 1) return i[0];
  let s;
  for (let a of i) {
    if (!("inputs" in a)) continue;
    if (!r || r.length === 0) {
      if (!a.inputs || a.inputs.length === 0) return a;
      continue;
    }
    if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== r.length)
      continue;
    if (
      r.every((p, l) => {
        let d = "inputs" in a && a.inputs[l];
        return d ? Tt(p, d) : !1;
      })
    ) {
      if (s && "inputs" in s && s.inputs) {
        let p = Vr(a.inputs, s.inputs, r);
        if (p)
          throw new Re({ abiItem: a, type: p[0] }, { abiItem: s, type: p[1] });
      }
      s = a;
    }
  }
  return s || i[0];
}
function Tt(e, t) {
  let r = typeof e,
    n = t.type;
  switch (n) {
    case "address":
      return x(e, { strict: !1 });
    case "bool":
      return r === "boolean";
    case "function":
      return r === "string";
    case "string":
      return r === "string";
    default:
      return n === "tuple" && "components" in t
        ? Object.values(t.components).every((o, i) =>
            Tt(Object.values(e)[i], o)
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
            n
          )
        ? r === "number" || r === "bigint"
        : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)
        ? r === "string" || e instanceof Uint8Array
        : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)
        ? Array.isArray(e) &&
          e.every((o) =>
            Tt(o, A(v({}, t), { type: n.replace(/(\[[0-9]{0,}\])$/, "") }))
          )
        : !1;
  }
}
function Vr(e, t, r) {
  for (let n in e) {
    let o = e[n],
      i = t[n];
    if (
      o.type === "tuple" &&
      i.type === "tuple" &&
      "components" in o &&
      "components" in i
    )
      return Vr(o.components, i.components, r[n]);
    let s = [o.type, i.type];
    if (
      s.includes("address") && s.includes("bytes20")
        ? !0
        : s.includes("address") && s.includes("string")
        ? x(r[n], { strict: !1 })
        : s.includes("address") && s.includes("bytes")
        ? x(r[n], { strict: !1 })
        : !1
    )
      return s;
  }
}
var Wr = { gwei: 9, wei: 18 },
  qr = { ether: -9, wei: 9 },
  ca = { ether: -18, gwei: -9 };
function tt(e, t) {
  let r = e.toString(),
    n = r.startsWith("-");
  n && (r = r.slice(1)), (r = r.padStart(t, "0"));
  let [o, i] = [r.slice(0, r.length - t), r.slice(r.length - t)];
  return (
    (i = i.replace(/(0+)$/, "")),
    `${n ? "-" : ""}${o || "0"}${i ? `.${i}` : ""}`
  );
}
function rt(e, t = "wei") {
  return tt(e, Wr[t]);
}
function O(e, t = "wei") {
  return tt(e, qr[t]);
}
var nt = class extends u {
    constructor({ address: t }) {
      super(`State for account "${t}" is set multiple times.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "AccountStateConflictError",
        });
    }
  },
  ot = class extends u {
    constructor() {
      super("state and stateDiff are set on the same account."),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "StateAssignmentConflictError",
        });
    }
  };
function Xr(e) {
  return e.reduce(
    (t, { slot: r, value: n }) => `${t}        ${r}: ${n}
`,
    ""
  );
}
function Jr(e) {
  return e
    .reduce(
      (t, o) => {
        var i = o,
          { address: r } = i,
          n = L(i, ["address"]);
        let s = `${t}    ${r}:
`;
        return (
          n.nonce &&
            (s += `      nonce: ${n.nonce}
`),
          n.balance &&
            (s += `      balance: ${n.balance}
`),
          n.code &&
            (s += `      code: ${n.code}
`),
          n.state &&
            ((s += `      state:
`),
            (s += Xr(n.state))),
          n.stateDiff &&
            ((s += `      stateDiff:
`),
            (s += Xr(n.stateDiff))),
          s
        );
      },
      `  State Override:
`
    )
    .slice(0, -1);
}
function Ae(e) {
  let t = Object.entries(e)
      .map(([n, o]) => (o === void 0 || o === !1 ? null : [n, o]))
      .filter(Boolean),
    r = t.reduce((n, [o]) => Math.max(n, o.length), 0);
  return t.map(([n, o]) => `  ${`${n}:`.padEnd(r + 1)}  ${o}`).join(`
`);
}
var it = class extends u {
  constructor() {
    super(
      [
        "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
        "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
      ].join(`
`)
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeConflictError",
      });
  }
};
var Yr = class extends u {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        Ae(t),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
        "- a Legacy Transaction with `gasPrice`",
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidSerializableTransactionError",
      });
  }
};
var Zr = class extends u {
    constructor(
      t,
      {
        account: r,
        docsPath: n,
        chain: o,
        data: i,
        gas: s,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: p,
        nonce: l,
        to: d,
        value: m,
      }
    ) {
      let f = Ae({
        chain: o && `${o?.name} (id: ${o?.id})`,
        from: r?.address,
        to: d,
        value:
          typeof m < "u" && `${rt(m)} ${o?.nativeCurrency?.symbol || "ETH"}`,
        data: i,
        gas: s,
        gasPrice: typeof a < "u" && `${O(a)} gwei`,
        maxFeePerGas: typeof c < "u" && `${O(c)} gwei`,
        maxPriorityFeePerGas: typeof p < "u" && `${O(p)} gwei`,
        nonce: l,
      });
      super(t.shortMessage, {
        cause: t,
        docsPath: n,
        metaMessages: [
          ...(t.metaMessages ? [...t.metaMessages, " "] : []),
          "Request Arguments:",
          f,
        ].filter(Boolean),
      }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "TransactionExecutionError",
        }),
        (this.cause = t);
    }
  },
  Kr = class extends u {
    constructor({
      blockHash: t,
      blockNumber: r,
      blockTag: n,
      hash: o,
      index: i,
    }) {
      let s = "Transaction";
      n &&
        i !== void 0 &&
        (s = `Transaction at block time "${n}" at index "${i}"`),
        t &&
          i !== void 0 &&
          (s = `Transaction at block hash "${t}" at index "${i}"`),
        r &&
          i !== void 0 &&
          (s = `Transaction at block number "${r}" at index "${i}"`),
        o && (s = `Transaction with hash "${o}"`),
        super(`${s} could not be found.`),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "TransactionNotFoundError",
        });
    }
  },
  Qr = class extends u {
    constructor({ hash: t }) {
      super(
        `Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "TransactionReceiptNotFoundError",
        });
    }
  },
  en = class extends u {
    constructor({ hash: t }) {
      super(
        `Timed out while waiting for transaction with hash "${t}" to be confirmed.`
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "WaitForTransactionReceiptTimeoutError",
        });
    }
  };
var st = class extends u {
    constructor(
      t,
      {
        account: r,
        docsPath: n,
        chain: o,
        data: i,
        gas: s,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: p,
        nonce: l,
        to: d,
        value: m,
        stateOverride: f,
      }
    ) {
      let b = r ? J(r) : void 0,
        h = Ae({
          from: b?.address,
          to: d,
          value:
            typeof m < "u" && `${rt(m)} ${o?.nativeCurrency?.symbol || "ETH"}`,
          data: i,
          gas: s,
          gasPrice: typeof a < "u" && `${O(a)} gwei`,
          maxFeePerGas: typeof c < "u" && `${O(c)} gwei`,
          maxPriorityFeePerGas: typeof p < "u" && `${O(p)} gwei`,
          nonce: l,
        });
      f &&
        (h += `
${Jr(f)}`),
        super(t.shortMessage, {
          cause: t,
          docsPath: n,
          metaMessages: [
            ...(t.metaMessages ? [...t.metaMessages, " "] : []),
            "Raw Call Arguments:",
            h,
          ].filter(Boolean),
        }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "CallExecutionError",
        }),
        (this.cause = t);
    }
  },
  tn = class extends u {
    constructor(
      t,
      {
        abi: r,
        args: n,
        contractAddress: o,
        docsPath: i,
        functionName: s,
        sender: a,
      }
    ) {
      let c = re({ abi: r, args: n, name: s }),
        p = c
          ? Et({
              abiItem: c,
              args: n,
              includeFunctionName: !1,
              includeName: !1,
            })
          : void 0,
        l = c ? T(c, { includeName: !0 }) : void 0,
        d = Ae({
          address: o && ur(o),
          function: l,
          args:
            p &&
            p !== "()" &&
            `${[...Array(s?.length ?? 0).keys()].map(() => " ").join("")}${p}`,
          sender: a,
        });
      super(
        t.shortMessage ||
          `An unknown error occurred while executing the contract function "${s}".`,
        {
          cause: t,
          docsPath: i,
          metaMessages: [
            ...(t.metaMessages ? [...t.metaMessages, " "] : []),
            "Contract Call:",
            d,
          ].filter(Boolean),
        }
      ),
        Object.defineProperty(this, "abi", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "args", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "cause", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "contractAddress", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "formattedArgs", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "functionName", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sender", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ContractFunctionExecutionError",
        }),
        (this.abi = r),
        (this.args = n),
        (this.cause = t),
        (this.contractAddress = o),
        (this.functionName = s),
        (this.sender = a);
    }
  },
  rn = class extends u {
    constructor({ abi: t, data: r, functionName: n, message: o }) {
      let i, s, a, c;
      if (r && r !== "0x")
        try {
          s = et({ abi: t, data: r });
          let { abiItem: l, errorName: d, args: m } = s;
          if (d === "Error") c = m[0];
          else if (d === "Panic") {
            let [f] = m;
            c = fr[f];
          } else {
            let f = l ? T(l, { includeName: !0 }) : void 0,
              b =
                l && m
                  ? Et({
                      abiItem: l,
                      args: m,
                      includeFunctionName: !1,
                      includeName: !1,
                    })
                  : void 0;
            a = [
              f ? `Error: ${f}` : "",
              b && b !== "()"
                ? `       ${[...Array(d?.length ?? 0).keys()]
                    .map(() => " ")
                    .join("")}${b}`
                : "",
            ];
          }
        } catch (l) {
          i = l;
        }
      else o && (c = o);
      let p;
      i instanceof Z &&
        ((p = i.signature),
        (a = [
          `Unable to decode signature "${p}" as it was not found on the provided ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`,
        ])),
        super(
          (c && c !== "execution reverted") || p
            ? [
                `The contract function "${n}" reverted with the following ${
                  p ? "signature" : "reason"
                }:`,
                c || p,
              ].join(`
`)
            : `The contract function "${n}" reverted.`,
          { cause: i, metaMessages: a }
        ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ContractFunctionRevertedError",
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "reason", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "signature", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = s),
        (this.reason = c),
        (this.signature = p);
    }
  },
  nn = class extends u {
    constructor({ functionName: t }) {
      super(`The contract function "${t}" returned no data ("0x").`, {
        metaMessages: [
          "This could be due to any of the following:",
          `  - The contract does not have the function "${t}",`,
          "  - The parameters passed to the contract function may be invalid, or",
          "  - The address is not a contract.",
        ],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ContractFunctionZeroDataError",
        });
    }
  },
  at = class extends u {
    constructor({ data: t, message: r }) {
      super(r || ""),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 3,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RawContractError",
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = t);
    }
  };
var Bt = "/docs/contract/decodeFunctionResult";
function on(e) {
  let { abi: t, args: r, functionName: n, data: o } = e,
    i = t[0];
  if (n) {
    let a = re({ abi: t, args: r, name: n });
    if (!a) throw new F(n, { docsPath: Bt });
    i = a;
  }
  if (i.type !== "function") throw new F(void 0, { docsPath: Bt });
  if (!i.outputs) throw new ze(i.name, { docsPath: Bt });
  let s = Qe(i.outputs, o);
  if (s && s.length > 1) return s;
  if (s && s.length === 1) return s[0];
}
var sn = "/docs/contract/encodeFunctionData";
function an(e) {
  let { abi: t, args: r, functionName: n } = e,
    o = t[0];
  if (n) {
    let i = re({ abi: t, args: r, name: n });
    if (!i) throw new F(n, { docsPath: sn });
    o = i;
  }
  if (o.type !== "function") throw new F(void 0, { docsPath: sn });
  return { abi: [o], functionName: ee(T(o)) };
}
function un(e) {
  let { args: t } = e,
    { abi: r, functionName: n } =
      e.abi.length === 1 && e.functionName?.startsWith("0x") ? e : an(e),
    o = r[0],
    i = n,
    s = "inputs" in o && o.inputs ? Ze(o.inputs, t ?? []) : void 0;
  return At([i, s ?? "0x"]);
}
function cn({ blockNumber: e, chain: t, contract: r }) {
  let n = t?.contracts?.[r];
  if (!n) throw new W({ chain: t, contract: { name: r } });
  if (e && n.blockCreated && n.blockCreated > e)
    throw new W({
      blockNumber: e,
      chain: t,
      contract: { name: r, blockCreated: n.blockCreated },
    });
  return n.address;
}
var C = class extends u {
  constructor({ cause: t, message: r } = {}) {
    let n = r
      ?.replace("execution reverted: ", "")
      ?.replace("execution reverted", "");
    super(
      `Execution reverted ${
        n ? `with reason: ${n}` : "for an unknown reason"
      }.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ExecutionRevertedError",
      });
  }
};
Object.defineProperty(C, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3,
});
Object.defineProperty(C, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/,
});
var N = class extends u {
  constructor({ cause: t, maxFeePerGas: r } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        r ? ` = ${O(r)} gwei` : ""
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeCapTooHigh",
      });
  }
};
Object.defineProperty(N, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
});
var ne = class extends u {
  constructor({ cause: t, maxFeePerGas: r } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        r ? ` = ${O(r)}` : ""
      } gwei) cannot be lower than the block base fee.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "FeeCapTooLow",
      });
  }
};
Object.defineProperty(ne, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
});
var oe = class extends u {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      `Nonce provided for the transaction ${
        r ? `(${r}) ` : ""
      }is higher than the next one expected.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceTooHighError",
      });
  }
};
Object.defineProperty(oe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/,
});
var ie = class extends u {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      [
        `Nonce provided for the transaction ${
          r ? `(${r}) ` : ""
        }is lower than the current nonce of the account.`,
        "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
      ].join(`
`),
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceTooLowError",
      });
  }
};
Object.defineProperty(ie, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/,
});
var se = class extends u {
  constructor({ cause: t, nonce: r } = {}) {
    super(
      `Nonce provided for the transaction ${
        r ? `(${r}) ` : ""
      }exceeds the maximum allowed nonce.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "NonceMaxValueError",
      });
  }
};
Object.defineProperty(se, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/,
});
var ae = class extends u {
  constructor({ cause: t } = {}) {
    super(
      [
        "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
      ].join(`
`),
      {
        cause: t,
        metaMessages: [
          "This error could arise when the account does not have enough funds to:",
          " - pay for the total gas fee,",
          " - pay for the value to send.",
          " ",
          "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
          " - `gas` is the amount of gas needed for transaction to execute,",
          " - `gas fee` is the gas fee,",
          " - `value` is the amount of ether to send to the recipient.",
        ],
      }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InsufficientFundsError",
      });
  }
};
Object.defineProperty(ae, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/,
});
var ue = class extends u {
  constructor({ cause: t, gas: r } = {}) {
    super(
      `The amount of gas ${
        r ? `(${r}) ` : ""
      }provided for the transaction exceeds the limit allowed for the block.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "IntrinsicGasTooHighError",
      });
  }
};
Object.defineProperty(ue, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/,
});
var ce = class extends u {
  constructor({ cause: t, gas: r } = {}) {
    super(
      `The amount of gas ${
        r ? `(${r}) ` : ""
      }provided for the transaction is too low.`,
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "IntrinsicGasTooLowError",
      });
  }
};
Object.defineProperty(ce, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/,
});
var pe = class extends u {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionTypeNotSupportedError",
      });
  }
};
Object.defineProperty(pe, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/,
});
var D = class extends u {
  constructor({ cause: t, maxPriorityFeePerGas: r, maxFeePerGas: n } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          r ? ` = ${O(r)} gwei` : ""
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          n ? ` = ${O(n)} gwei` : ""
        }).`,
      ].join(`
`),
      { cause: t }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TipAboveFeeCapError",
      });
  }
};
Object.defineProperty(D, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
});
var le = class extends u {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t?.shortMessage}`, {
      cause: t,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownNodeError",
      });
  }
};
var Oe = class extends u {
  constructor({ body: t, details: r, headers: n, status: o, url: i }) {
    super("HTTP request failed.", {
      details: r,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${V(i)}`,
        t && `Request body: ${k(t)}`,
      ].filter(Boolean),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "HttpRequestError",
      }),
      Object.defineProperty(this, "body", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "headers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "status", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "url", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.body = t),
      (this.headers = n),
      (this.status = o),
      (this.url = i);
  }
};
var ut = class extends u {
    constructor({ body: t, error: r, url: n }) {
      super("RPC Request failed.", {
        cause: r,
        details: r.message,
        metaMessages: [`URL: ${V(n)}`, `Request body: ${k(t)}`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RpcRequestError",
        }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.code = r.code);
    }
  },
  pn = class extends u {
    constructor({ body: t, url: r }) {
      super("The request took too long to respond.", {
        details: "The request timed out.",
        metaMessages: [`URL: ${V(r)}`, `Request body: ${k(t)}`],
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "TimeoutError",
        });
    }
  };
var no = -1,
  w = class extends u {
    constructor(t, { code: r, docsPath: n, metaMessages: o, shortMessage: i }) {
      super(i, { cause: t, docsPath: n, metaMessages: o || t?.metaMessages }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "RpcError",
        }),
        Object.defineProperty(this, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.name = t.name),
        (this.code = t instanceof ut ? t.code : r ?? no);
    }
  },
  G = class extends w {
    constructor(t, r) {
      super(t, r),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ProviderRpcError",
        }),
        Object.defineProperty(this, "data", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.data = r.data);
    }
  },
  kt = class e extends w {
    constructor(t) {
      super(t, {
        code: e.code,
        shortMessage:
          "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
      }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ParseRpcError",
        });
    }
  };
Object.defineProperty(kt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
});
var St = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "JSON is not a valid request object.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidRequestRpcError",
      });
  }
};
Object.defineProperty(St, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
});
var It = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "The method does not exist / is not available.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "MethodNotFoundRpcError",
      });
  }
};
Object.defineProperty(It, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
});
var zt = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParamsRpcError",
      });
  }
};
Object.defineProperty(zt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
});
var Rt = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "An internal error was received." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InternalRpcError",
      });
  }
};
Object.defineProperty(Rt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
});
var Ct = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidInputRpcError",
      });
  }
};
Object.defineProperty(Ct, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
});
var Lt = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "Requested resource not found." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceNotFoundRpcError",
      });
  }
};
Object.defineProperty(Lt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
});
var Ft = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "Requested resource not available.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceUnavailableRpcError",
      });
  }
};
Object.defineProperty(Ft, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
});
var Ht = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "Transaction creation failed." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "TransactionRejectedRpcError",
      });
  }
};
Object.defineProperty(Ht, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
});
var Ut = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "Method is not implemented." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "MethodNotSupportedRpcError",
      });
  }
};
Object.defineProperty(Ut, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
});
var Nt = class e extends w {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "Request exceeds defined limit." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "LimitExceededRpcError",
      });
  }
};
Object.defineProperty(Nt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
});
var Dt = class e extends w {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "Version of JSON-RPC protocol is not supported.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "JsonRpcVersionUnsupportedError",
      });
  }
};
Object.defineProperty(Dt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
});
var Gt = class e extends G {
  constructor(t) {
    super(t, { code: e.code, shortMessage: "User rejected the request." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UserRejectedRequestError",
      });
  }
};
Object.defineProperty(Gt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
});
var _t = class e extends G {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage:
        "The requested method and/or account has not been authorized by the user.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnauthorizedProviderError",
      });
  }
};
Object.defineProperty(_t, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
});
var Vt = class e extends G {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "The Provider does not support the requested method.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnsupportedProviderMethodError",
      });
  }
};
Object.defineProperty(Vt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
});
var Wt = class e extends G {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "The Provider is disconnected from all chains.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ProviderDisconnectedError",
      });
  }
};
Object.defineProperty(Wt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
});
var qt = class e extends G {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "The Provider is not connected to the requested chain.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainDisconnectedError",
      });
  }
};
Object.defineProperty(qt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
});
var Xt = class e extends G {
  constructor(t) {
    super(t, {
      code: e.code,
      shortMessage: "An error occurred when attempting to switch chain.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SwitchChainError",
      });
  }
};
Object.defineProperty(Xt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
});
var ln = class extends w {
  constructor(t) {
    super(t, { shortMessage: "An unknown RPC error occurred." }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownRpcError",
      });
  }
};
function dn(e, t) {
  let r = (e.details || "").toLowerCase(),
    n = e instanceof u ? e.walk((o) => o.code === C.code) : e;
  return n instanceof u
    ? new C({ cause: e, message: n.details })
    : C.nodeMessage.test(r)
    ? new C({ cause: e, message: e.details })
    : N.nodeMessage.test(r)
    ? new N({ cause: e, maxFeePerGas: t?.maxFeePerGas })
    : ne.nodeMessage.test(r)
    ? new ne({ cause: e, maxFeePerGas: t?.maxFeePerGas })
    : oe.nodeMessage.test(r)
    ? new oe({ cause: e, nonce: t?.nonce })
    : ie.nodeMessage.test(r)
    ? new ie({ cause: e, nonce: t?.nonce })
    : se.nodeMessage.test(r)
    ? new se({ cause: e, nonce: t?.nonce })
    : ae.nodeMessage.test(r)
    ? new ae({ cause: e })
    : ue.nodeMessage.test(r)
    ? new ue({ cause: e, gas: t?.gas })
    : ce.nodeMessage.test(r)
    ? new ce({ cause: e, gas: t?.gas })
    : pe.nodeMessage.test(r)
    ? new pe({ cause: e })
    : D.nodeMessage.test(r)
    ? new D({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas,
        maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
      })
    : new le({ cause: e });
}
function fn(e, n) {
  var o = n,
    { docsPath: t } = o,
    r = L(o, ["docsPath"]);
  let i = (() => {
    let s = dn(e, r);
    return s instanceof le ? e : s;
  })();
  return new st(i, v({ docsPath: t }, r));
}
function mn(e, { format: t }) {
  if (!t) return {};
  let r = {};
  function n(i) {
    let s = Object.keys(i);
    for (let a of s)
      a in e && (r[a] = e[a]),
        i[a] && typeof i[a] == "object" && !Array.isArray(i[a]) && n(i[a]);
  }
  let o = t(e || {});
  return n(o), r;
}
var oo = { legacy: "0x0", eip2930: "0x1", eip1559: "0x2", eip4844: "0x3" };
function bn(e) {
  let t = {};
  return (
    typeof e.accessList < "u" && (t.accessList = e.accessList),
    typeof e.blobVersionedHashes < "u" &&
      (t.blobVersionedHashes = e.blobVersionedHashes),
    typeof e.blobs < "u" &&
      (typeof e.blobs[0] != "string"
        ? (t.blobs = e.blobs.map((r) => M(r)))
        : (t.blobs = e.blobs)),
    typeof e.data < "u" && (t.data = e.data),
    typeof e.from < "u" && (t.from = e.from),
    typeof e.gas < "u" && (t.gas = y(e.gas)),
    typeof e.gasPrice < "u" && (t.gasPrice = y(e.gasPrice)),
    typeof e.maxFeePerBlobGas < "u" &&
      (t.maxFeePerBlobGas = y(e.maxFeePerBlobGas)),
    typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = y(e.maxFeePerGas)),
    typeof e.maxPriorityFeePerGas < "u" &&
      (t.maxPriorityFeePerGas = y(e.maxPriorityFeePerGas)),
    typeof e.nonce < "u" && (t.nonce = y(e.nonce)),
    typeof e.to < "u" && (t.to = e.to),
    typeof e.type < "u" && (t.type = oo[e.type]),
    typeof e.value < "u" && (t.value = y(e.value)),
    t
  );
}
var Jt = new Map();
function yn({ fn: e, id: t, shouldSplitBatch: r, wait: n = 0, sort: o }) {
  let i = () =>
      E(this, null, function* () {
        let d = c();
        s();
        let m = d.map(({ args: f }) => f);
        m.length !== 0 &&
          e(m)
            .then((f) => {
              o && Array.isArray(f) && f.sort(o);
              for (let b = 0; b < d.length; b++) {
                let { pendingPromise: h } = d[b];
                h.resolve?.([f[b], f]);
              }
            })
            .catch((f) => {
              for (let b = 0; b < d.length; b++) {
                let { pendingPromise: h } = d[b];
                h.reject?.(f);
              }
            });
      }),
    s = () => Jt.delete(t),
    a = () => c().map(({ args: d }) => d),
    c = () => Jt.get(t) || [],
    p = (d) => Jt.set(t, [...c(), d]);
  return {
    flush: s,
    schedule(d) {
      return E(this, null, function* () {
        let m = {},
          f = new Promise((S, _) => {
            (m.resolve = S), (m.reject = _);
          });
        return (
          r?.([...a(), d]) && i(),
          c().length > 0
            ? (p({ args: d, pendingPromise: m }), f)
            : (p({ args: d, pendingPromise: m }), setTimeout(i, n), f)
        );
      });
    },
  };
}
function hn(e) {
  let {
      account: t,
      gasPrice: r,
      maxFeePerGas: n,
      maxPriorityFeePerGas: o,
      to: i,
    } = e,
    s = t ? J(t) : void 0;
  if (s && !x(s.address)) throw new P({ address: s.address });
  if (i && !x(i)) throw new P({ address: i });
  if (typeof r < "u" && (typeof n < "u" || typeof o < "u")) throw new it();
  if (n && n > 2n ** 256n - 1n) throw new N({ maxFeePerGas: n });
  if (o && n && o > n)
    throw new D({ maxFeePerGas: n, maxPriorityFeePerGas: o });
}
function xn(e, t) {
  return E(this, null, function* () {
    let Yt = t,
      {
        account: r = e.account,
        batch: n = !!e.batch?.multicall,
        blockNumber: o,
        blockTag: i = "latest",
        accessList: s,
        blobs: a,
        data: c,
        gas: p,
        gasPrice: l,
        maxFeePerBlobGas: d,
        maxFeePerGas: m,
        maxPriorityFeePerGas: f,
        nonce: b,
        to: h,
        value: S,
        stateOverride: _,
      } = Yt,
      de = L(Yt, [
        "account",
        "batch",
        "blockNumber",
        "blockTag",
        "accessList",
        "blobs",
        "data",
        "gas",
        "gasPrice",
        "maxFeePerBlobGas",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "to",
        "value",
        "stateOverride",
      ]),
      fe = r ? J(r) : void 0;
    try {
      hn(t);
      let me = (o ? y(o) : void 0) || i,
        be = co(_),
        je = e.chain?.formatters?.transactionRequest?.format,
        Me = (je || bn)(
          A(v({}, mn(de, { format: je })), {
            from: fe?.address,
            accessList: s,
            blobs: a,
            data: c,
            gas: p,
            gasPrice: l,
            maxFeePerBlobGas: d,
            maxFeePerGas: m,
            maxPriorityFeePerGas: f,
            nonce: b,
            to: h,
            value: S,
          })
        );
      if (n && io({ request: Me }) && !be)
        try {
          return yield so(e, A(v({}, Me), { blockNumber: o, blockTag: i }));
        } catch (ft) {
          if (!(ft instanceof ye) && !(ft instanceof W)) throw ft;
        }
      let Zt = yield e.request({
        method: "eth_call",
        params: be ? [Me, me, be] : [Me, me],
      });
      return Zt === "0x" ? { data: void 0 } : { data: Zt };
    } catch (dt) {
      let me = ao(dt),
        { offchainLookup: be, offchainLookupSignature: je } = yield import(
          "./chunk-FFBEXAX4.js"
        );
      if (e.ccipRead !== !1 && me?.slice(0, 10) === je && h)
        return { data: yield be(e, { data: me, to: h }) };
      throw fn(dt, A(v({}, t), { account: fe, chain: e.chain }));
    }
  });
}
function io({ request: e }) {
  let o = e,
    { data: t, to: r } = o,
    n = L(o, ["data", "to"]);
  return !(
    !t ||
    t.startsWith(sr) ||
    !r ||
    Object.values(n).filter((i) => typeof i < "u").length > 0
  );
}
function so(e, t) {
  return E(this, null, function* () {
    let { batchSize: r = 1024, wait: n = 0 } =
        typeof e.batch?.multicall == "object" ? e.batch.multicall : {},
      {
        blockNumber: o,
        blockTag: i = "latest",
        data: s,
        multicallAddress: a,
        to: c,
      } = t,
      p = a;
    if (!p) {
      if (!e.chain) throw new ye();
      p = cn({ blockNumber: o, chain: e.chain, contract: "multicall3" });
    }
    let d = (o ? y(o) : void 0) || i,
      { schedule: m } = yn({
        id: `${e.uid}.${d}`,
        wait: n,
        shouldSplitBatch(h) {
          return h.reduce((_, { data: de }) => _ + (de.length - 2), 0) > r * 2;
        },
        fn: (h) =>
          E(this, null, function* () {
            let S = h.map((fe) => ({
                allowFailure: !0,
                callData: fe.data,
                target: fe.to,
              })),
              _ = un({ abi: yt, args: [S], functionName: "aggregate3" }),
              de = yield e.request({
                method: "eth_call",
                params: [{ data: _, to: p }, d],
              });
            return on({
              abi: yt,
              args: [S],
              functionName: "aggregate3",
              data: de || "0x",
            });
          }),
      }),
      [{ returnData: f, success: b }] = yield m({ data: s, to: c });
    if (!b) throw new at({ data: f });
    return f === "0x" ? { data: void 0 } : { data: f };
  });
}
function ao(e) {
  if (!(e instanceof u)) return;
  let t = e.walk();
  return typeof t?.data == "object" ? t.data?.data : t.data;
}
function gn(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: r, value: n }) => {
      if (r.length !== 66)
        throw new xe({ size: r.length, targetSize: 66, type: "hex" });
      if (n.length !== 66)
        throw new xe({ size: n.length, targetSize: 66, type: "hex" });
      return (t[r] = n), t;
    }, {});
}
function uo(e) {
  let { balance: t, nonce: r, state: n, stateDiff: o, code: i } = e,
    s = {};
  if (
    (i !== void 0 && (s.code = i),
    t !== void 0 && (s.balance = y(t)),
    r !== void 0 && (s.nonce = y(r)),
    n !== void 0 && (s.state = gn(n)),
    o !== void 0)
  ) {
    if (s.state) throw new ot();
    s.stateDiff = gn(o);
  }
  return s;
}
function co(e) {
  if (!e) return;
  let t = {};
  for (let r of e) {
    let n = r,
      { address: o } = n,
      i = L(n, ["address"]);
    if (!x(o, { strict: !1 })) throw new P({ address: o });
    if (t[o]) throw new nt({ address: o });
    t[o] = uo(i);
  }
  return t;
}
var ct = class extends u {
    constructor({
      callbackSelector: t,
      cause: r,
      data: n,
      extraData: o,
      sender: i,
      urls: s,
    }) {
      super(
        r.shortMessage ||
          "An error occurred while fetching for an offchain result.",
        {
          cause: r,
          metaMessages: [
            ...(r.metaMessages || []),
            r.metaMessages?.length ? "" : [],
            "Offchain Gateway Call:",
            s && ["  Gateway URL(s):", ...s.map((a) => `    ${V(a)}`)],
            `  Sender: ${i}`,
            `  Data: ${n}`,
            `  Callback selector: ${t}`,
            `  Extra data: ${o}`,
          ].flat(),
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "OffchainLookupError",
        });
    }
  },
  pt = class extends u {
    constructor({ result: t, url: r }) {
      super(
        "Offchain gateway response is malformed. Response data must be a hex value.",
        { metaMessages: [`Gateway URL: ${V(r)}`, `Response: ${k(t)}`] }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "OffchainLookupResponseMalformedError",
        });
    }
  },
  lt = class extends u {
    constructor({ sender: t, to: r }) {
      super(
        "Reverted sender address does not match target contract address (`to`).",
        {
          metaMessages: [
            `Contract address: ${r}`,
            `OffchainLookup sender address: ${t}`,
          ],
        }
      ),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "OffchainLookupSenderMismatchError",
        });
    }
  };
function wn(e, t) {
  if (!x(e, { strict: !1 })) throw new P({ address: e });
  if (!x(t, { strict: !1 })) throw new P({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
var dc = "0x556f1830",
  po = {
    name: "OffchainLookup",
    type: "error",
    inputs: [
      { name: "sender", type: "address" },
      { name: "urls", type: "string[]" },
      { name: "callData", type: "bytes" },
      { name: "callbackFunction", type: "bytes4" },
      { name: "extraData", type: "bytes" },
    ],
  };
function fc(i, s) {
  return E(
    this,
    arguments,
    function* (e, { blockNumber: t, blockTag: r, data: n, to: o }) {
      let { args: a } = et({ data: n, abi: [po] }),
        [c, p, l, d, m] = a,
        { ccipRead: f } = e,
        b = f && typeof f?.request == "function" ? f.request : lo;
      try {
        if (!wn(o, c)) throw new lt({ sender: c, to: o });
        let h = yield b({ data: l, sender: c, urls: p }),
          { data: S } = yield xn(e, {
            blockNumber: t,
            blockTag: r,
            data: R([d, Ze([{ type: "bytes" }, { type: "bytes" }], [h, m])]),
            to: o,
          });
        return S;
      } catch (h) {
        throw new ct({
          callbackSelector: d,
          cause: h,
          data: n,
          extraData: m,
          sender: c,
          urls: p,
        });
      }
    }
  );
}
function lo(n) {
  return E(this, arguments, function* ({ data: e, sender: t, urls: r }) {
    let o = new Error("An unknown error occurred.");
    for (let i = 0; i < r.length; i++) {
      let s = r[i],
        a = s.includes("{data}") ? "GET" : "POST",
        c = a === "POST" ? { data: e, sender: t } : void 0;
      try {
        let p = yield fetch(s.replace("{sender}", t).replace("{data}", e), {
            body: JSON.stringify(c),
            method: a,
          }),
          l;
        if (
          (p.headers.get("Content-Type")?.startsWith("application/json")
            ? (l = (yield p.json()).data)
            : (l = yield p.text()),
          !p.ok)
        ) {
          o = new Oe({
            body: c,
            details: l?.error ? k(l.error) : p.statusText,
            headers: p.headers,
            status: p.status,
            url: s,
          });
          continue;
        }
        if (!j(l)) {
          o = new pt({ result: l, url: s });
          continue;
        }
        return l;
      } catch (p) {
        o = new Oe({ body: c, details: p.message, url: s });
      }
    }
    throw o;
  });
}
export {
  u as a,
  j as b,
  g as c,
  X as d,
  De as e,
  K as f,
  gt as g,
  gr as h,
  ei as i,
  xr as j,
  M as k,
  y as l,
  Y as m,
  cs as n,
  J as o,
  lr as p,
  dr as q,
  Wr as r,
  ca as s,
  tt as t,
  O as u,
  le as v,
  rt as w,
  Ae as x,
  Yr as y,
  Zr as z,
  Kr as A,
  Qr as B,
  en as C,
  k as D,
  Oe as E,
  ut as F,
  pn as G,
  kt as H,
  St as I,
  It as J,
  zt as K,
  Rt as L,
  Ct as M,
  Lt as N,
  Ft as O,
  Ht as P,
  Ut as Q,
  Nt as R,
  Dt as S,
  Gt as T,
  _t as U,
  Vt as V,
  Wt as W,
  qt as X,
  Xt as Y,
  ln as Z,
  dn as _,
  mn as $,
  bn as aa,
  hn as ba,
  Hr as ca,
  yt as da,
  on as ea,
  un as fa,
  cn as ga,
  tn as ha,
  rn as ia,
  nn as ja,
  at as ka,
  yn as la,
  dc as ma,
  po as na,
  fc as oa,
  lo as pa,
  xn as qa,
};
