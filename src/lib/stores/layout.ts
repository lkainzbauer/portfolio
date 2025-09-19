import { writable } from 'svelte/store';

export const innerWidth = writable<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

export const isMobile = writable<boolean>(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

if (typeof window !== 'undefined') {
	window.addEventListener('resize', () => {
		innerWidth.set(window.innerWidth);
		isMobile.set(window.innerWidth < 768); // adjust breakpoint as needed
	});
}