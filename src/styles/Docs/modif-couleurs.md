Pour avoir les couleurs en orange
/!\ background toujours en bleu donc ne va pas forcément

```css
/* Global variables */
:root {
	/* Colors */
	--gray-0: #090b11;
	--gray-50: #141925;
	--gray-100: #283044;
	--gray-200: #3d4663;
	--gray-300: #505d84;
	--gray-400: #6474a2;
	--gray-500: #8490b5;
	--gray-600: #a3acc8;
	--gray-700: #c3cadb;
	--gray-800: #e3e6ee;
	--gray-900: #f3f4f7;
	--gray-999-basis: 0, 0%, 100%;
	--gray-999_40: hsla(var(--gray-999-basis), 0.4);
	--gray-999: #ffffff;

	/* Orange color scheme (using original variable names) */
	--accent-light: #FFA94D;
	--accent-regular: #F76808;
	--accent-dark: #C4320A;
	--accent-overlay: hsla(24, 95%, 50%, 0.33);
	--accent-subtle-overlay: var(--accent-overlay);
	--accent-text-over: var(--gray-999);

	--link-color: var(--accent-regular);

	/* Gradients */
	--gradient-stop-1: var(--accent-light);
	--gradient-stop-2: var(--accent-regular);
	--gradient-stop-3: var(--accent-dark);
	--gradient-subtle: linear-gradient(150deg, var(--gray-900) 19%, var(--gray-999) 150%);
	--gradient-accent: linear-gradient(
		150deg,
		var(--gradient-stop-1),
		var(--gradient-stop-2),
		var(--gradient-stop-3)
	);
	--gradient-accent-orange: linear-gradient(
		150deg,
		#FFA94D,
		var(--accent-regular),
		var(--accent-dark)
	);
	--gradient-stroke: linear-gradient(180deg, var(--gray-900), var(--gray-700));

	/* Shadows */
	--shadow-sm: 0px 6px 3px rgba(9, 11, 17, 0.01), 0px 4px 2px rgba(9, 11, 17, 0.01),
		0px 2px 2px rgba(9, 11, 17, 0.02), 0px 0px 1px rgba(9, 11, 17, 0.03);
	--shadow-md: 0px 28px 11px rgba(9, 11, 17, 0.01), 0px 16px 10px rgba(9, 11, 17, 0.03),
		0px 7px 7px rgba(9, 11, 17, 0.05), 0px 2px 4px rgba(9, 11, 17, 0.06);
	--shadow-lg: 0px 62px 25px rgba(9, 11, 17, 0.01), 0px 35px 21px rgba(9, 11, 17, 0.05),
		0px 16px 16px rgba(9, 11, 17, 0.1), 0px 4px 9px rgba(9, 11, 17, 0.12);

	/* Text Sizes */
	--text-sm: 0.875rem;
	--text-base: 1rem;
	--text-md: 1.125rem;
	--text-lg: 1.25rem;
	--text-xl: 1.625rem;
	--text-2xl: 2.125rem;
	--text-3xl: 2.625rem;
	--text-4xl: 3.5rem;
	--text-5xl: 4.5rem;

	/* Fonts */
	--font-system: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	--font-body: 'Public Sans', var(--font-system);
	--font-brand: Rubik, var(--font-system);

	/* Transitions */
	--theme-transition: 0.2s ease-in-out;
}

:root.theme-dark {
	--gray-0: #ffffff;
	--gray-50: #f3f4f7;
	--gray-100: #e3e6ee;
	--gray-200: #c3cadb;
	--gray-300: #a3acc8;
	--gray-400: #8490b5;
	--gray-500: #6474a2;
	--gray-600: #505d84;
	--gray-700: #3d4663;
	--gray-800: #283044;
	--gray-900: #141925;
	--gray-999-basis: 225, 31%, 5%;
	--gray-999: #090b11;

	/* Dark theme orange colors (using original variable names) */
	--accent-light: #C4320A;
	--accent-regular: #F76808;
	--accent-dark: #FFA94D;
	--accent-overlay: hsla(24, 95%, 50%, 0.33);
	--accent-subtle-overlay: hsla(24, 95%, 30%, 0.33);
	--accent-text-over: var(--gray-0);

	--link-color: var(--accent-dark);

	--gradient-stop-1: #FF8B3E;
	--gradient-subtle: linear-gradient(150deg, var(--gray-900) 19%, var(--gray-999) 81%);
	--gradient-accent-orange: linear-gradient(
		150deg,
		#FFA94D,
		var(--accent-regular),
		var(--accent-light)
	);
	--gradient-stroke: linear-gradient(180deg, var(--gray-600), var(--gray-800));

	--shadow-sm: 0px 6px 3px rgba(255, 255, 255, 0.01), 0px 4px 2px rgba(255, 255, 255, 0.01),
		0px 2px 2px rgba(255, 255, 255, 0.02), 0px 0px 1px rgba(255, 255, 255, 0.03);
	--shadow-md: 0px 28px 11px rgba(255, 255, 255, 0.01), 0px 16px 10px rgba(255, 255, 255, 0.03),
		0px 7px 7px rgba(255, 255, 255, 0.05), 0px 2px 4px rgba(255, 255, 255, 0.06);
	--shadow-lg: 0px 62px 25px rgba(255, 255, 255, 0.01), 0px 35px 21px rgba(255, 255, 255, 0.05),
		0px 16px 16px rgba(255, 255, 255, 0.1), 0px 4px 9px rgba(255, 255, 255, 0.12);
}

```