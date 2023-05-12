import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Menu {
  name: string;
	icon: string | IconProp;
	hasSubItems: boolean;
};
