const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

function decodeHTML(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.documentElement.textContent || "";
}

export { showFormattedDate, decodeHTML };
