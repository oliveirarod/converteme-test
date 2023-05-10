import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Menu = {
  name: string;
	icon: string | IconProp;
	hasSubItems: boolean;
};
