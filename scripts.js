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

  // Convert inputs to numbers
  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);

  // Check if inputs are valid numbers
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page.";
    return; // Exit the function to prevent further execution
  }

  // Check if divider is 0
  if (dividerNum === 0) {
    result.innerText =
      "Division not performed. Divider cannot be zero. Try again.";
    return; // Exit the function to prevent further execution
  }

  // Perform division
  result.innerText = Math.floor(dividendNum / dividerNum);
});
