import { ReactComponent as NewItem } from "../assests/icons/new.svg";
import { ReactComponent as Account } from "../assests/icons/account.svg";
import { ReactComponent as Discount30 } from "../assests/icons/discount_30%.svg";
import { ReactComponent as Discount50 } from "../assests/icons/discount_50%.svg";
import { ReactComponent as FacebookIcon } from "../assests/icons/facebook_icon.svg";

import cart1 from "../assests/images/cart1.svg";

export const MENU = [
  {
    id: 1,
    menuItem: "Home",
  },
  {
    id: 2,
    menuItem: "About",
  },
  {
    id: 3,
    menuItem: "About",
  },
  {
    id: 4,
    menuItem: "Contact",
  },
];

export const ICONS = [
  {
    id: 1,
    icon: <Account />,
  },
  {
    id: 2,
    icon: <Account />,
  },
  {
    id: 3,
    icon: <Account />,
  },
  {
    id: 4,
    icon: <Account />,
  },
];

export const myObject = {
  SKU: ": SS001",
  Category: ": Sofas",
  Tags: ": Sofa, Chair, Home, Shop",
  Share: [<FacebookIcon />, <FacebookIcon />, <FacebookIcon />],
};

export const RELATED_PRODUCTS = [
  {
    icon: <Discount30 />,
    src: cart1,
    title: "Syltherine",
    description: "Styish cafe chair",
    price: "Rp 2.500.000",
    discount: "Rp 3.500.000",
  },
  {
    icon: "",
    src: cart1,
    title: "Leviosa",
    description: "Styish cafe chair",
    price: "Rp 2.500.000",
    discount: "",
  },
  {
    icon: <Discount50 />,
    src: cart1,
    title: "Lolito",
    description: "Styish cafe chair",
    price: "Rp 7.000.000",
    discount: "Rp 14.000.000",
  },
  {
    icon: <NewItem />,
    src: cart1,
    title: "Respira",
    description: "Styish cafe chair",
    price: "Rp 500.000",
    discount: "",
  },
];

export const STARS = [
  { id: 1, star: <div className="starDiv"></div> },
  { id: 2, star: <div className="starDiv"></div> },
  { id: 3, star: <div className="starDiv"></div> },
  { id: 4, star: <div className="starDiv"></div> },
  { id: 5, star: <div className="starDiv"></div> },
];

export const LINKS = [
  {
    page: "Links",
  },
  {
    page: "Home",
  },
  {
    page: "Shop",
  },
  {
    page: "About",
  },
  {
    page: "Contact",
  },
];

export const HELP = [
  {
    page: "Help",
  },
  {
    page: "Payment Options",
  },
  {
    page: "Returns",
  },
  {
    page: "Privacy Policies",
  },
];

