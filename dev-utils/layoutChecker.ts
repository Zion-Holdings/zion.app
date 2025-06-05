interface LayoutIssue {
  tag: string;
  class: string;
  text: string | null | undefined;
}

function logIssue(title: string, issues: LayoutIssue[]) {
  console.group(title);
  issues.forEach(issue => {
    console.warn(issue);
  });
  console.groupEnd();
}

window.addEventListener('load', () => {
  const broken: LayoutIssue[] = [];
  document.querySelectorAll<HTMLElement>('body *').forEach(el => {
    if (el.offsetHeight === 0 || el.scrollWidth > window.innerWidth) {
      broken.push({
        tag: el.tagName,
        class: el.className,
        text: el.textContent?.slice(0, 30),
      });
    }
  });
  if (broken.length) logIssue('Layout issues detected', broken);
});

export {};
