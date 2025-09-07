import * as FaIcons from "react-icons/fa";

export default function DynamicIcon({ name, size = 20, color, ...props }) {
  const IconComponent = FaIcons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in react-icons/fa`);
    return null;
  }

  return <IconComponent size={size} color={color} {...props} />;
}
