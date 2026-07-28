// Restores the site nav's dropdown behaviour without Wix's proprietary
// runtime JS. Each trigger/panel pair opens on hover or focus, and
// stays open briefly after the mouse leaves so moving the cursor from
// the nav item down into the panel doesn't close it mid-transit.
(function () {
  var CLOSE_DELAY = 350;

  function wire(trigger, panel) {
    var closeTimer = null;

    function open() {
      clearTimeout(closeTimer);
      trigger.classList.add('nav-open');
      panel.classList.add('nav-open');
    }

    function scheduleClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        trigger.classList.remove('nav-open');
        panel.classList.remove('nav-open');
      }, CLOSE_DELAY);
    }

    trigger.addEventListener('mouseenter', open);
    trigger.addEventListener('mouseleave', scheduleClose);
    panel.addEventListener('mouseenter', open);
    panel.addEventListener('mouseleave', scheduleClose);
    trigger.addEventListener('focusin', open);
    trigger.addEventListener('focusout', scheduleClose);
    panel.addEventListener('focusin', open);
    panel.addEventListener('focusout', scheduleClose);

    // Tap-to-toggle for touch devices (no hover)
    trigger.addEventListener('click', function (e) {
      if (window.matchMedia('(hover: none)').matches) {
        e.preventDefault();
        if (trigger.classList.contains('nav-open')) {
          trigger.classList.remove('nav-open');
          panel.classList.remove('nav-open');
        } else {
          open();
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Standard submenus: <li class="wixui-dropdown-menu__item"><a>...</a><ul>...</ul></li>
    document.querySelectorAll('.wixui-dropdown-menu__item').forEach(function (li) {
      var panel = li.querySelector(':scope > ul');
      if (panel) wire(li, panel);
    });

    // "more" overflow flyout: trigger <li id="...__more__"> and panel
    // <div id="...dropWrapper"> are siblings, not nested.
    var moreTrigger = document.getElementById('DrpDwnMn0__more__');
    var morePanel = document.getElementById('DrpDwnMn0dropWrapper');
    if (moreTrigger && morePanel) wire(moreTrigger, morePanel);
  });
})();
