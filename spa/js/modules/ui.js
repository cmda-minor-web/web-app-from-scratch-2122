// Skeleton State
export function skeletonState() {
  const skeleton = $("ul.empty-list");
  console.log(skeleton);
  skeleton.classList.toggle("hidden");
}

function $(element) {
  return document.querySelector(element);
}
