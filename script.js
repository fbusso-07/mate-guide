document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll("#mate-checklist input[type='checkbox']");
  var statusEl = document.getElementById("checklist-status");

  function updateStatus() {
    var total = checkboxes.length;
    var checkedCount = 0;

    checkboxes.forEach(function (checkbox) {
      var listItem = checkbox.closest("li");
      if (checkbox.checked) {
        checkedCount++;
        listItem.classList.add("checked");
      } else {
        listItem.classList.remove("checked");
      }
    });

    if (checkedCount === total) {
      statusEl.textContent = "You have everything. Time to make some mate!";
      statusEl.classList.add("all-ready");
    } else {
      statusEl.textContent = checkedCount + " of " + total + " ready.";
      statusEl.classList.remove("all-ready");
    }
  }

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateStatus);
  });
});
