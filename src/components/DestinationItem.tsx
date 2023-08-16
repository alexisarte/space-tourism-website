type DestinationItemProps = {
  name: string;
  onclick: (name: string) => void;
  isActive: string;
};

const DestinationItem = ({ name, onclick, isActive }: DestinationItemProps) => {
  return (
    <li className="group relative" onClick={() => onclick(name)}>
      <span className={`${isActive === name ? "text-white" : " "}`}>
        {name}
      </span>
      <span
        className={`absolute bottom-0 block h-1 w-full ${
          isActive === name
            ? "bg-white"
            : "scale-0 transition-all duration-700 group-hover:scale-100 group-hover:bg-white group-hover:opacity-50"
        }`}
      ></span>
    </li>
  );
};

export default DestinationItem;
