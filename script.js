$(function () {
  let ox = document.querySelectorAll(".container > div"),
    x = -1,
    P1 = 0,
    P2 = 0,
    N1,
    N2;
  $("button.startButton").on("click", function () {
    N1 = $("input:eq(0)").val();
    N2 = $("input:eq(1)").val();
    $(".players p:eq(0)").text(`${N1 || "Unknown 1"} : ${P1}`);
    $(".players p:eq(1)").text(`${N2 || "Unknown 2"} : ${P2}`);
    $(".start").fadeOut(1200);
  });
  $(".container > div").on("click", function () {
    if ($(this).text() === "") {
      if (x !== 1) {
        $(this).text("X");
        x = 1;
      } else {
        $(this).text("O");
        x = 0;
      }
      winner();
    }
  });
  function winner() {
    if (
      ox[0].textContent != "" &&
      ((ox[0].textContent === ox[1].textContent &&
        ox[1].textContent === ox[2].textContent) ||
        (ox[0].textContent === ox[3].textContent &&
          ox[3].textContent === ox[6].textContent) ||
        (ox[0].textContent === ox[4].textContent &&
          ox[4].textContent === ox[8].textContent))
    ) {
      ox[0].textContent === "X" ? P1++ : P2++;
      setTimeout(() => {
        $(".container > div").text("");
      }, 1000);
    } else if (
      ox[2].textContent != "" &&
      ((ox[2].textContent === ox[4].textContent &&
        ox[4].textContent === ox[6].textContent) ||
        (ox[2].textContent === ox[5].textContent &&
          ox[5].textContent === ox[8].textContent))
    ) {
      ox[2].textContent === "X" ? P1++ : P2++;
      setTimeout(() => {
        $(".container > div").text("");
      }, 1000);
    } else if (
      ox[4].textContent != "" &&
      ((ox[3].textContent === ox[4].textContent &&
        ox[4].textContent === ox[5].textContent) ||
        (ox[1].textContent === ox[4].textContent &&
          ox[4].textContent === ox[7].textContent))
    ) {
      ox[4].textContent === "X" ? P1++ : P2++;
      setTimeout(() => {
        $(".container > div").text("");
      }, 1000);
    } else if (
      ox[7].textContent != "" &&
      ox[6].textContent === ox[7].textContent &&
      ox[7].textContent === ox[8].textContent
    ) {
      ox[7].textContent === "X" ? P1++ : P2++;
      setTimeout(() => {
        $(".container > div").text("");
      }, 1000);
    } else if (checkOX()) {
      setTimeout(() => {
        $(".container > div").text("");
      }, 1000);
    }
    $(".players p:eq(0)").text(`${N1 || "Unknown 1"} : ${P1}`);
    $(".players p:eq(1)").text(`${N2 || "Unknown 2"} : ${P2}`);
  }
  $("#resetOX").click(function () {
    $(".container > div").text("");
  });
  function checkOX() {
    let j = 0;
    ox.forEach((element) => {
      if (element.textContent != "") j++;
    });
    console.log(j);
    if (j === 9) return true;
    else return false;
  }
});
