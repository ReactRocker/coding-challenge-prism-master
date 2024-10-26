export const updateSpacingParam = async (
  id: number,
  value: string,
  unit: string
) => {
  const paramValue = value.length === 0 ? "auto" : `${value}${unit}`;

  try {
    await fetch(`http://localhost:12346/spacing/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: paramValue,
      }),
    });
  } catch (err) {
    console.log(err);
  }
};
