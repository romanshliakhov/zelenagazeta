import {
  removeClassInArray,
  addCustomClass,
  removeCustomClass,
} from "../functions/customFunctions";

// --------------- tabs custom function --------------- //

const tabsFunction = function (
  tabsDataInitArray,
  tabsNavAttr,
  tabsContentAttr,
  active = "active"
) {
  tabsDataInitArray &&
    tabsDataInitArray.forEach((tabParent) => {
      if (tabParent) {
        const tabNav = [...tabParent.querySelectorAll(`[${tabsNavAttr}]`)];
        const tabContent = [
          ...tabParent.querySelectorAll(`[${tabsContentAttr}]`),
        ];
        const tabButton = tabParent.querySelector("[data-tab-btn]");

        tabNav.map((nav) => {
          nav.addEventListener("click", (e) => {
         
            if (e.target.tagName === "A") return;

            e.preventDefault();
            const activeTabAttr = e.currentTarget.getAttribute(`${tabsNavAttr}`);
           
            removeClassInArray(tabNav, active);
            removeClassInArray(tabContent, active);
            addCustomClass(
              tabParent.querySelector(`[${tabsNavAttr}="${activeTabAttr}"]`),
              active
            );
            addCustomClass(
              tabParent.querySelector(
                `[${tabsContentAttr}="${activeTabAttr}"]`
              ),
              active
            );
          });
        });

        if (tabButton) {
          tabButton.addEventListener("click", () => {
            const activeIndex = tabNav.findIndex((nav) =>
              nav.classList.contains(active)
            );
            const newIndex = activeIndex === 0 ? 1 : 0;

            const newActiveTabAttr = tabNav[newIndex].getAttribute(tabsNavAttr);

            removeClassInArray(tabNav, active);
            removeClassInArray(tabContent, active);
            addCustomClass(tabNav[newIndex], active);
            addCustomClass(
              tabParent.querySelector(
                `[${tabsContentAttr}="${newActiveTabAttr}"]`
              ),
              active
            );
          });
        }
      }
    });
};

document.addEventListener("DOMContentLoaded", function () {
  tabsFunction(document.querySelectorAll("[data-tabs-parrent]"), "data-tab", "data-tab-content");
});


