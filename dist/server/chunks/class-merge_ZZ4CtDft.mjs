function clsx(...inputs) {
  let str = "";
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (typeof input === "string" || typeof input === "number") {
      str += (str && " ") + input;
    } else if (Array.isArray(input)) {
      str += (str && " ") + clsx(...input);
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) {
          str += (str && " ") + key;
        }
      }
    }
  }
  return str;
}

function simpleMerge(...classes) {
  const uniqueClasses = /* @__PURE__ */ new Set();
  classes.forEach((cls) => {
    if (cls) {
      cls.split(" ").forEach((c) => uniqueClasses.add(c));
    }
  });
  return Array.from(uniqueClasses).join(" ");
}
function cn(...inputs) {
  return simpleMerge(clsx(inputs));
}

export { cn as c };
