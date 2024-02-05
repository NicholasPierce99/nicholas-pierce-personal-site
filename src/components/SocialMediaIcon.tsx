// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  secondary?: boolean;
  onClick?: () => void;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, title, secondary, onClick }) => {
  return (
    <button
    onClick={onClick}
    className={`${secondary ? "bg-secondary" : "bg-accent"} ${secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"} transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg text-bold relative w-full sm:w-fit`
    }
    >
    <Tooltip title={title} placement="bottom" arrow>
      <div
        className="flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer
        hover:bg-secondary transition-all ease-linear duration-300"
      >
        <img src={imgSrc} alt="" />
      </div>
    </Tooltip>
    </button>
  );
};

export default SocialMediaIcon;