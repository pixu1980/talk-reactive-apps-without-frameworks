import "@pixu-talks/core";

const DEMO_URL_QUERY_PARAM = "demo-url";

/**
 * Resolves the external demo URL and forces iframe friendly mode.
 * @param {string | undefined} rawUrl
 * @returns {string | null}
 */
function resolveDemoEmbedUrl(rawUrl) {
	if (!rawUrl) return null;

	try {
		const url = new URL(rawUrl, window.location.href);
		url.searchParams.set("embed", "1");
		return url.toString();
	} catch {
		return null;
	}
}

/**
 * Applies the configured external demo URL to all embed placeholders in the deck.
 * @returns {void}
 */
function hydrateDemoEmbeds() {
	const params = new URLSearchParams(window.location.search);
	const overrideUrl = params.get(DEMO_URL_QUERY_PARAM) ?? undefined;
	const frames = document.querySelectorAll("iframe[data-demo-embed-url]");

	for (const frame of frames) {
		if (!(frame instanceof HTMLIFrameElement)) continue;
		const nextUrl = resolveDemoEmbedUrl(overrideUrl ?? frame.dataset.demoEmbedUrl);
		if (!nextUrl) continue;
		frame.src = nextUrl;
	}
}

hydrateDemoEmbeds();
