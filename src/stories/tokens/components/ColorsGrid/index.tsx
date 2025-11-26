import colors from "../../../../styles/tokens/colors";

export function ColorsGrid() {
  return Object.entries(colors)?.map(([key, colorVariation]) => {
    return (
      <div key={key}>
        <p>{key}</p>

        {Object.entries(colorVariation)?.map(([k, v]) => (
          <div
            key={k}
            className="p-8 transition-colors bg-black"
            style={{ backgroundColor: v }}
          >
            <div className={"flex justify-between font-mono"}>
              <strong>{k}</strong>
              <span>{v}</span>
            </div>
          </div>
        ))}
      </div>
    );
  });
}
