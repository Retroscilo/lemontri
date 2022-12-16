import useWindowSize from "@/lib/useWindowDimensions";

const HiveGrid = ({ elements, hidden }) => {
  const size = useWindowSize();
  let baseWidth = size.width * (1 / 6.4);
  let gap = 30;
  const maxWidth = 600;

  const colNumber = Math.floor(size.width / (baseWidth + gap));
  const rowNumber = Math.ceil(elements.length / colNumber) + 1;
  const rest = Math.floor(elements.length / colNumber);
  let correction = 0;
  // console.log({ length: elements.length, cols: colNumber, rows: rowNumber, rest });

  if (!size.width) return null;
  return (
    <div className="w-full h-full max-w-[600px] mx-auto flex flex-col">
      {[...Array(rowNumber).keys()].map((row_i) => {
        let even = rowNumber % 2 === 0 ? row_i % 2 !== 0 : row_i % 2 === 0;
        if (even) correction++;
        return (
          <div
            key={row_i}
            className={`flex justify-center items-center my-[4px] mx-auto`}
            style={{ gap, maxWidth: size.width > maxWidth && !even ? "85%" : "inherit" }}
          >
            {[...Array(even ? colNumber : colNumber - 1).keys()].map((col_i) => {
              let index = row_i * colNumber + col_i - correction;
              let middleCol = (colNumber - (even ? 1 : 2)) / 2;
              let middleRow = (rowNumber - 1) / 2;
              let factor = 1 + 0.2 - Math.abs(middleCol - col_i) / 10 - Math.abs(middleRow - row_i) / 10;
              let width = baseWidth * factor;
              if (!elements[index]) return <div key={index} style={{ width, height: width }} />;
              return (
                <div
                  className={`flex justify-center items-center`}
                  style={{
                    width,
                    transform: hidden ? "scale(0)" : "scale(1)",
                    transition: `all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0 + (1 - factor)}s`,
                  }}
                  key={index}
                >
                  {elements[index]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HiveGrid;
