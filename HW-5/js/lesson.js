// PHONE CHECKER-----------------------------------------------------------------------------------------

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.addEventListener("click", () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "ok";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "not ok";
    phoneResult.style.color = "red";
  }
});

//TAB SLIDER-------------------------------------------------------------------------------------------------

const tabContentItems = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const tabItemsParent = document.querySelector(".tab_content_items");
let index = 0;

const hideTabContent = () => {
  tabContentItems.forEach((item) => {
    item.style.display = "none";
  });
  tabItems.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (index = 0) => {
  tabContentItems[index].style.display = "block";
  tabItems[index].classList.add("tab_content_item_active");
};

hideTabContent();
showTabContent(index);

tabItemsParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((tabItem, tabIndex) => {
      if (event.target === tabItem) {
        hideTabContent();
        index = tabIndex;
        showTabContent(index);
      }
    });
  }
};
const autoSlider = () => {
  hideTabContent();
  index = (index + 1) % tabItems.length;
  showTabContent(index);
};

setInterval(autoSlider, 3000);

// CONVERTER

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");
const rubInput = document.querySelector("#rub");

const converter = (
  element,
  targetElement,
  secondElement,
  thirdElement,
  current
) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const data = JSON.parse(request.response);

      switch (current) {
        case "som":
          targetElement.value = (element.value / data.usd).toFixed(2);
          secondElement.value = (element.value / data.eur).toFixed(2);
          thirdElement.value = (element.value / data.rub).toFixed(2);
          break;
        case "usd":
          targetElement.value = (element.value * data.usd).toFixed(2);
          secondElement.value = (element.value * 0.91).toFixed(2);
          thirdElement.value = (element.value * 92.29).toFixed(2);
          break;
        case "eur":
          targetElement.value = (element.value * data.eur).toFixed(2);
          secondElement.value = (element.value * 1.01).toFixed(2);
          thirdElement.value = (element.value * 99.72).toFixed(2);
          break;
        default:
          break;
      }
      if (element.value === "") {
        targetElement.value = "";
        secondElement.value = "";
        thirdElement.value = "";
      }
    };
  };
};
converter(somInput, usdInput, eurInput, rubInput, "som");
converter(usdInput, somInput, eurInput, rubInput, "usd");
converter(eurInput, somInput, usdInput, rubInput, "eur");
