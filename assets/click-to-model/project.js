"use strict";

// Enhance the examples without hiding content when JavaScript is unavailable.
const tabList = document.querySelector('[role="tablist"]');
const tabs = [...tabList.querySelectorAll('[role="tab"]')];
function selectTab(selected, moveFocus = false) {
  for (const tab of tabs) {
    const active = tab === selected;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
  }
  if (moveFocus) selected.focus();
}
tabList.hidden = false;
document.getElementById("examples").classList.add("tabs-enabled");
selectTab(tabs[0]);
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let target;
    if (event.key === "ArrowRight") target = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") target = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = tabs.length - 1;
    if (target !== undefined) {
      event.preventDefault();
      selectTab(tabs[target], true);
    }
  });
});

const copyButton = document.getElementById("copy-bibtex");
copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("bibtex");
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    status.textContent = "Citation copied.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = "Citation selected. Press Ctrl+C or ⌘C to copy.";
  }
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const video = document.getElementById("demo-video");
function respectMotionPreference() {
  if (reducedMotion.matches) {
    video.autoplay = false;
    video.pause();
  }
}
respectMotionPreference();
reducedMotion.addEventListener("change", respectMotionPreference);
