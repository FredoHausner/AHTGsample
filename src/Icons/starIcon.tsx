import React from "react";
import Svg, {Path} from "react-native-svg";

export const StarIcon = ({
  size,
  fillColor,
}: {
  size?: number;
  fillColor?: string;
}) => {
  return (
    <Svg
      width={size ? size : "30"}
      height={size ? size : "30"}
      viewBox="0 0 400 400"
    >
      <Path
        fill={fillColor ? fillColor : "#3c3c3c"}
        d="M196.8 8.784c-1.885.461-3.877 1.139-3.471 1.182.483.05-.792 1.234-1.329 1.234-.585 0-1.6 1.008-1.6 1.588 0 .245-.36.832-.8 1.304-.44.472-.8 1.095-.8 1.383 0 .289-.18.525-.4.525-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.27-.4.6 0 .33-.18.6-.4.6-.22 0-.4.234-.4.52 0 .736-.941 2.673-1.3 2.677-.165.002-.3.363-.3.803 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.234-.4.52 0 .736-.941 2.673-1.3 2.677-.165.002-.3.275-.3.608 0 .556-.722 2.117-1.2 2.595-.11.11-.22.38-.243.6-.103.939-.677 2.2-1.004 2.2-.194 0-.353.36-.353.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.54-.4 1.2 0 .66-.18 1.2-.4 1.2-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.371-.4.824 0 .453-.18.712-.4.576-.22-.136-.4.123-.4.576 0 .453-.18.824-.4.824-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.234-.4.52 0 .736-.941 2.673-1.3 2.677-.165.002-.3.363-.3.803 0 .44-.18.8-.4.8-.22 0-.406.315-.413.7-.007.385-.277 1.049-.6 1.476-.323.428-.587 1.103-.587 1.5 0 .398-.18.724-.4.724-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.135.801-.3.801-.165.001-.75.991-1.3 2.199-.55 1.208-1.135 2.198-1.3 2.199-.165 0-.3.235-.3.521 0 .736-.941 2.673-1.3 2.677-.165.002-.3.363-.3.803 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.272-.4.605 0 .663-.803 2.251-1.334 2.64-.184.134-.304.314-.267.4.203.472-.62 2.576-1.257 3.213-.408.408-.742 1.102-.742 1.542 0 .44-.18.8-.4.8-.22 0-.4.54-.4 1.2 0 .66-.18 1.2-.4 1.2-.22 0-.4.234-.4.52 0 .736-.941 2.673-1.3 2.677-.165.002-.3.363-.3.803 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.36-.4.8 0 .44-.18.8-.4.8-.22 0-.4.27-.4.6 0 .33-.18.6-.4.6-.22 0-.4.431-.4.957 0 1.206-.631 1.443-3.833 1.443-1.445 0-2.567.175-2.567.4 0 .226-1.133.4-2.6.4s-2.6.174-2.6.4c0 .229-1.2.4-2.8.4-1.6 0-2.8.171-2.8.4 0 .222-1.067.4-2.4.4s-2.4.178-2.4.4c0 .226-1.133.4-2.6.4s-2.6.174-2.6.4c0 .229-1.2.4-2.8.4-1.6 0-2.8.171-2.8.4s-1.2.4-2.8.4c-1.6 0-2.8.171-2.8.4 0 .226-1.133.4-2.6.4s-2.6.174-2.6.4c0 .229-1.2.4-2.8.4-1.6 0-2.8.171-2.8.4s-1.2.4-2.8.4c-1.6 0-2.8.171-2.8.4 0 .226-1.133.4-2.6.4s-2.6.174-2.6.4c0 .222-1.067.4-2.4.4s-2.4.178-2.4.4c0 .229-1.2.4-2.8.4-1.6 0-2.8.171-2.8.4 0 .226-1.133.4-2.6.4s-2.6.174-2.6.4c0 .229-1.2.4-2.8.4-1.6 0-2.8.171-2.8.4s-1.2.4-2.8.4c-1.6 0-2.8.171-2.8.4 0 .225-1.125.4-2.576.4-1.417 0-2.676.16-2.796.355-.121.195-2.575.486-5.454.646-3.634.203-5.294.447-5.429.799-.166.43-8.656 1.355-9.845 1.071-.165-.039-.3.109-.3.329 0 .229-1.2.4-2.8.4-1.6 0-2.8.171-2.8.4s-1.2.4-2.8.4c-1.6 0-2.8.171-2.8.4 0 .22-.63.4-1.4.4-.77 0-1.4.18-1.4.4 0 .22-.32.4-.712.4-.391 0-.971.36-1.288.8-.317.44-.897.8-1.288.8-.392 0-.712.288-.712.64 0 .351-.585 1.186-1.3 1.854L.2 151.71v12.116l16.691 16.687c9.18 9.178 16.872 16.687 17.092 16.687.447 0 25.075 24.558 26.005 25.931.324.478.73.869.903.869.172 0 1.112.81 2.088 1.8s1.97 1.8 2.21 1.8c.47 0 9.175 8.627 10.811 10.716.55.702 1.236 1.278 1.524 1.28.288.002.441.139.342.304-.1.165.069.532.376.816.307.283.558.412.558.286s2.977 2.762 6.616 6.42c4.552 4.576 6.555 6.856 6.422 7.314-.106.365-.316 2.509-.467 4.764-.151 2.255-.431 4.1-.623 4.1-.191 0-.348 1.08-.348 2.4 0 1.333-.178 2.4-.4 2.4-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.22 0-.4.99-.4 2.2 0 1.21-.18 2.2-.4 2.2-.22 0-.4.9-.4 2s-.18 2-.4 2c-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.22 0-.4.99-.4 2.2 0 1.21-.18 2.2-.4 2.2-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.22 0-.4.81-.4 1.8s-.18 1.8-.4 1.8c-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.222 0-.4 1.067-.4 2.4 0 1.32-.164 2.4-.364 2.4-.201 0-.467 1.035-.592 2.3-.582 5.874-.742 6.9-1.081 6.9-.2 0-.363 1.069-.363 2.376s-.18 2.488-.4 2.624c-.22.136-.4 1.036-.4 2s-.18 1.864-.4 2c-.22.136-.4 1.137-.4 2.224 0 1.087-.18 1.976-.4 1.976-.222 0-.4 1.067-.4 2.4 0 1.32-.146 2.4-.326 2.4-.179 0-.247 1.08-.151 2.4.116 1.608.025 2.4-.275 2.4-.276 0-.448.843-.448 2.2 0 1.21-.18 2.2-.4 2.2-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.22 0-.4.9-.4 2s-.18 2-.4 2c-.222 0-.4 1.067-.4 2.4s-.178 2.4-.4 2.4c-.247 0-.4 2.067-.4 5.4s.153 5.4.4 5.4c.22 0 .4.32.4.712 0 .391.36.971.8 1.288.44.317.8.806.8 1.085 0 .822 1.68 2.515 2.496 2.515.413 0 .64.18.504.4-.136.22.123.4.576.4.453 0 .824.143.824.318 0 .175.675.393 1.5.483 3.213.353 8.9.092 8.9-.408 0-.134.63-.491 1.4-.793.77-.302 1.4-.696 1.4-.875 0-.179.36-.325.8-.325.44 0 .801-.135.803-.3.004-.359 1.941-1.3 2.677-1.3.286 0 .52-.18.52-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.294-.4.653-.4.359 0 .944-.315 1.3-.7.773-.836 3.891-2.5 4.685-2.5.309 0 .562-.18.562-.4 0-.22.27-.4.6-.4.33 0 .6-.18.6-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.283-.4.629-.4.345 0 .898-.27 1.228-.6.33-.33.947-.6 1.372-.6.424 0 .771-.18.771-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.283-.4.629-.4.345 0 .9-.272 1.232-.604.332-.332.769-.501.971-.376.203.125.368.037.368-.196s.27-.424.6-.424c.33 0 .6-.18.6-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.32-.4.712-.4.391 0 .971-.36 1.288-.8.317-.44.897-.8 1.288-.8.392 0 .712-.18.712-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.27-.4.6-.4.33 0 .6-.18.6-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.32-.4.712-.4.391 0 .963-.35 1.271-.777.308-.427 1.248-.893 2.089-1.035.84-.142 1.528-.422 1.528-.623s.36-.365.8-.365c.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.27-.4.6-.4.33 0 .6-.18.6-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.32-.4.712-.4.391 0 .971-.36 1.288-.8.317-.44.897-.8 1.288-.8.392 0 .712-.18.712-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.146.8-.325 0-.179.63-.573 1.4-.875.77-.302 1.4-.696 1.4-.875 0-.179.36-.325.8-.325.44 0 .8-.18.8-.4 0-.22.32-.4.712-.4.391 0 .971-.36 1.288-.8.317-.44.897-.8 1.288-.8.392 0 .712-.164.712-.365 0-.201.72-.486 1.6-.635.88-.149 1.6-.434 1.6-.635s.36-.365.8-.365c.44 0 .801-.135.803-.3.004-.359 1.941-1.3 2.677-1.3.286 0 .52-.18.52-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.27-.4.6-.4.33 0 .6-.18.6-.4 0-.22.32-.4.712-.4.391 0 .971-.36 1.288-.8.317-.44.897-.8 1.288-.8.392 0 .712-.18.712-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.36-.4.8-.4.44 0 .8-.18.8-.4 0-.22.54-.4 1.2-.4.66 0 1.2.18 1.2.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.32.4.712.4.391 0 .971.36 1.288.8.317.44.897.8 1.288.8.392 0 .712.18.712.4 0 .22.371.4.824.4.453 0 .712.18.576.4-.136.22.123.4.576.4.453 0 .824.18.824.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.164.8.365 0 .201.72.486 1.6.635.88.149 1.6.434 1.6.635s.32.365.712.365c.391 0 .971.36 1.288.8.317.44.897.8 1.288.8.392 0 .712.18.712.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.146.8.325 0 .179.63.573 1.4.875.77.302 1.4.696 1.4.875 0 .179.36.325.8.325.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.32.4.712.4.391 0 .971.36 1.288.8.317.44.897.8 1.288.8.392 0 .712.18.712.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.371.4.824.4.453 0 .712.18.576.4-.136.22.123.4.576.4.453 0 .824.18.824.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.164.8.365 0 .201.688.481 1.528.623.841.142 1.781.608 2.089 1.035.308.427.88.777 1.271.777.392 0 .712.18.712.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.371.4.824.4.453 0 .712.18.576.4-.136.22.123.4.576.4.453 0 .824.18.824.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.32.4.712.4.391 0 .971.36 1.288.8.317.44.897.8 1.288.8.392 0 .712.18.712.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.136.8.302 0 .167.585.542 1.3.834 2.276.93 3.1 1.39 3.1 1.732 0 .182.36.332.8.332.44 0 .8.18.8.4 0 .22.347.4.771.4.425 0 1.042.27 1.372.6.33.33.883.6 1.228.6.346 0 .629.18.629.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.345.4.767.4.421 0 .826.136.9.302.073.166 1.393.927 2.933 1.691 1.54.764 3.091 1.708 3.447 2.098.356.39.941.709 1.3.709.359 0 .653.18.653.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.36.4.8.4.44 0 .8.18.8.4 0 .22.345.4.767.4.421 0 .826.143.9.319.764 1.828 13.133 3.334 13.133 1.599 0-.175.371-.318.824-.318.453 0 .712-.18.576-.4-.14-.226.187-.4.749-.4.646 0 1.087-.282 1.251-.8.14-.44.422-.8.627-.8.205 0 .373-.32.373-.712 0-.391.36-.971.8-1.288.44-.317.8-.897.8-1.288 0-.392.18-.712.4-.712.247 0 .4-2.067.4-5.4s-.153-5.4-.4-5.4c-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.22 0-.4-.9-.4-2s-.18-2-.4-2c-.222 0-.4-1.067-.4-2.4 0-1.32-.162-2.4-.361-2.4-.198 0-.489-2.07-.647-4.6-.159-2.53-.446-4.6-.64-4.6s-.352-1.091-.352-2.424c0-1.513-.15-2.33-.4-2.176-.25.154-.4-.663-.4-2.176 0-1.349-.177-2.424-.4-2.424-.22 0-.4-.9-.4-2s-.18-2-.4-2c-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.22 0-.4-.99-.4-2.2 0-1.21-.18-2.2-.4-2.2-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.22 0-.4-.81-.4-1.8s-.18-1.8-.4-1.8c-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.22 0-.4-.99-.4-2.2 0-1.21-.18-2.2-.4-2.2-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.22 0-.4-.9-.4-2s-.18-2-.4-2c-.22 0-.4-.99-.4-2.2 0-1.21-.18-2.2-.4-2.2-.222 0-.4-1.067-.4-2.4s-.178-2.4-.4-2.4c-.222 0-.4-1.056-.4-2.367 0-1.301-.168-2.426-.373-2.5-.205-.073-.499-2.31-.653-4.971l-.28-4.838 6.453-6.471c3.549-3.559 6.453-6.37 6.453-6.246 0 .123.251-.008.558-.291.307-.284.476-.651.376-.816-.099-.165.054-.305.342-.312.288-.007.974-.559 1.524-1.229 1.91-2.323 10.379-10.759 10.802-10.759.233 0 1.055-.63 1.825-1.4.77-.77 1.584-1.4 1.81-1.4.226 0 .299-.18.163-.4-.136-.22.033-.4.376-.4a.626.626 0 00.624-.624c0-.343.18-.512.4-.376.22.136.4.048.4-.195 0-.462 13.268-13.784 14.713-14.772.456-.312.915-.897 1.021-1.3.105-.403.438-.733.74-.733s.814-.386 1.138-.857c.971-1.415 7.525-7.943 7.975-7.943.323 0 4.571-3.961 8.554-7.975.346-.35 14.057-14.061 14.683-14.684.188-.188 2.644-2.68 5.459-5.539l5.117-5.197V151.71l-1.3-1.216c-.715-.668-1.3-1.503-1.3-1.854 0-.352-.32-.64-.712-.64-.391 0-.971-.36-1.288-.8-.317-.44-.897-.8-1.288-.8-.392 0-.712-.18-.712-.4 0-.22-.63-.4-1.4-.4-.77 0-1.4-.18-1.4-.4 0-.229-1.2-.4-2.8-.4-1.6 0-2.8-.171-2.8-.4s-1.2-.4-2.8-.4c-1.6 0-2.8-.171-2.8-.4 0-.22-.135-.368-.3-.329-1.189.284-9.679-.641-9.845-1.071-.135-.352-1.794-.596-5.425-.798-2.876-.16-5.23-.451-5.23-.647 0-.195-1.26-.355-2.8-.355-1.6 0-2.8-.171-2.8-.4s-1.2-.4-2.8-.4c-1.6 0-2.8-.171-2.8-.4s-1.2-.4-2.8-.4c-1.6 0-2.8-.171-2.8-.4 0-.226-1.133-.4-2.6-.4s-2.6-.174-2.6-.4c0-.229-1.2-.4-2.8-.4-1.6 0-2.8-.171-2.8-.4 0-.222-1.067-.4-2.4-.4s-2.4-.178-2.4-.4c0-.226-1.133-.4-2.6-.4s-2.6-.174-2.6-.4c0-.229-1.2-.4-2.8-.4-1.6 0-2.8-.171-2.8-.4s-1.2-.4-2.8-.4c-1.6 0-2.8-.171-2.8-.4 0-.225-1.125-.4-2.576-.4-1.417 0-2.688-.18-2.824-.4-.136-.22-1.407-.4-2.824-.4-1.451 0-2.576-.175-2.576-.4 0-.229-1.2-.4-2.8-.4-1.6 0-2.8-.171-2.8-.4 0-.226-1.133-.4-2.6-.4s-2.6-.174-2.6-.4c0-.222-1.067-.4-2.4-.4s-2.4-.178-2.4-.4c0-.229-1.2-.4-2.8-.4-1.6 0-2.8-.171-2.8-.4 0-.226-1.133-.4-2.6-.4s-2.6-.174-2.6-.4c0-.225-1.122-.4-2.567-.4-3.202 0-3.833-.237-3.833-1.443 0-.526-.18-.957-.4-.957-.22 0-.4-.27-.4-.6 0-.33-.18-.6-.4-.6-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.54-.4-1.2 0-.66-.16-1.2-.355-1.2-.196 0-.474-.63-.619-1.4-.144-.77-.434-1.4-.644-1.4-.21 0-.382-.36-.382-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.135-.801-.3-.801-.165-.001-.75-.991-1.3-2.199-.55-1.208-1.135-2.198-1.3-2.199-.165 0-.3-.361-.3-.801 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.135-.801-.3-.803-.359-.004-1.3-1.941-1.3-2.677 0-.286-.18-.52-.4-.52-.22 0-.4-.36-.4-.8 0-.44-.16-.8-.355-.8-.196 0-.474-.63-.619-1.4-.144-.77-.434-1.4-.644-1.4-.21 0-.382-.36-.382-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.371-.4-.824 0-.453-.18-.712-.4-.576-.22.136-.4-.123-.4-.576 0-.453-.18-.824-.4-.824-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.54-.4-1.2 0-.66-.18-1.2-.4-1.2-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.172-.8-.382-.8-.21 0-.5-.63-.644-1.4-.145-.77-.423-1.4-.619-1.4-.195 0-.355-.36-.355-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.345-.4-.767 0-.421-.135-.826-.3-.9-.432-.192-2.1-3.505-2.1-4.171 0-.309-.135-.563-.3-.565-.359-.004-1.3-1.941-1.3-2.677 0-.286-.18-.52-.4-.52-.22 0-.4-.27-.4-.6 0-.33-.18-.6-.4-.6-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.36-.4-.8 0-.44-.18-.8-.4-.8-.22 0-.4-.32-.4-.712 0-.391-.36-.971-.8-1.288-.44-.317-.8-.82-.8-1.117 0-.722-.996-1.683-1.744-1.683-.331 0-.702-.316-.825-.701-.441-1.392-7.034-2.496-10.231-1.715"
      ></Path>
      <Path
        fill={fillColor ? fillColor : "#403c3c"}
        d="M27.507 142.69c.719.089 1.799.087 2.4-.004s.013-.164-1.307-.162c-1.32.002-1.812.077-1.093.166m342.8 0c.719.089 1.799.087 2.4-.004s.013-.164-1.307-.162c-1.32.002-1.812.077-1.093.166M75.32 353.2c0 1.21.075 1.705.167 1.1a8.899 8.899 0 000-2.2c-.092-.605-.167-.11-.167 1.1"
      ></Path>
      <Path
        fill={fillColor ? fillColor : "#403c3c"}
        d="M27.507 142.69c.719.089 1.799.087 2.4-.004s.013-.164-1.307-.162c-1.32.002-1.812.077-1.093.166m342.8 0c.719.089 1.799.087 2.4-.004s.013-.164-1.307-.162c-1.32.002-1.812.077-1.093.166M75.32 353.2c0 1.21.075 1.705.167 1.1a8.899 8.899 0 000-2.2c-.092-.605-.167-.11-.167 1.1"
      ></Path>
      <Path
        fill={fillColor ? fillColor : "#403c3c"}
        d="M27.507 142.69c.719.089 1.799.087 2.4-.004s.013-.164-1.307-.162c-1.32.002-1.812.077-1.093.166m342.8 0c.719.089 1.799.087 2.4-.004s.013-.164-1.307-.162c-1.32.002-1.812.077-1.093.166M75.32 353.2c0 1.21.075 1.705.167 1.1a8.899 8.899 0 000-2.2c-.092-.605-.167-.11-.167 1.1"
      ></Path>
      <Path
        fill={fillColor ? fillColor : "#403c3c"}
        d="M27.507 142.69c.719.089 1.799.087 2.4-.004s.013-.164-1.307-.162c-1.32.002-1.812.077-1.093.166m342.8 0c.719.089 1.799.087 2.4-.004s.013-.164-1.307-.162c-1.32.002-1.812.077-1.093.166M75.32 353.2c0 1.21.075 1.705.167 1.1a8.899 8.899 0 000-2.2c-.092-.605-.167-.11-.167 1.1"
      ></Path>
    </Svg>
  );
};