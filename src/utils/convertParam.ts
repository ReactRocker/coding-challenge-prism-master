export function convertParam(input: string): {
  default_value: string;
  default_unit: string;
} {
  const match = input.match(/^(\d+)(\D+)$/);

  if (!match) {
    return { default_value: "", default_unit: "pt" };
  }

  const default_value = match[1];
  const default_unit = match[2];

  return { default_value, default_unit };
}
