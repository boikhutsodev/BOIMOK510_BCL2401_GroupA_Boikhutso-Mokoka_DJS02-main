const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if either input is empty
  if (dividend === "" || divider === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
    return; // Exit the function to prevent further execution
  }

  result.innerText = Math.floor(dividend / divider);
});
