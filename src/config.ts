import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Ryan",
	subtitle: "Kepalakubik",
	description: "Seorang programmer fullstack dengan fokus pada pengembangan website",
	lang: "id", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/BG_CS_PV_03.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/favicon.svg"
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
//		LinkPreset.Home,
		LinkPreset.About,
		LinkPreset.Archive,
		{
			name: "Blog",
			"url": "/blog/"
		},
		{
			name: "Audio Review",
			url: "/audio-review/"
		},
/*		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},*/
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/favicon.svg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Ryan",
	aka: "kepalakubik",
	bio: "Programmer & Casual Audiophile",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://github.com/kepalakubik/",
		},
		{
			name: "Facebook",
			icon: "fa6-brands:facebook",
			url: "https://web.facebook.com/profile.php?id=61572984081926",
		},
		{
			name: "Instagram",
			icon: "fa6-brands:instagram",
			url: "https://www.instagram.com/kepalakubik/",
		},
		{
			name: "BlueSky",
			icon: "fa6-brands:bluesky",
			url: "https://bsky.app/profile/kepalakubik.my.id",
		},
		{
			name: "Trakteer",
			icon: "fa6-solid:heart",
			url: "https://trakteer.id/kepalakubik/tip",
		}
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
