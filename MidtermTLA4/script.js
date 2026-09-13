const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markdownInput.value;

  // Headings (H3, H2, H1)
  text = text.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // Blockquotes
  text = text.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

  // Images: ![alt](src)
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // Links: [text](href)
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Bold: **text** or __text__
  text = text.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");

  // Italic: *text* or _text_
  text = text.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  return text;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
});