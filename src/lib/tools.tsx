import * as BiIcons from "react-icons/bi";
import type { IconType } from "react-icons";

/**
 * Map of react icon components, which can be accessed by their name.
 * For example, `icons['Alarm']` will return the Alarm icon component.
 *
 * Every icon from the BoxIcons package is available:
 * https://react-icons.github.io/react-icons/icons/bi/
 *
 * The name resembles the original BoxIcons name, but without the "Bi" prefix.
 */
export const icons = Object.keys(BiIcons).reduce<Record<string, IconType>>(
  (acc, iconName) => {
    const formattedName = iconName.replace(/^Bi/, "");
    acc[formattedName] = (BiIcons as Record<string, IconType>)[iconName];
    return acc;
  },
  {}
);
