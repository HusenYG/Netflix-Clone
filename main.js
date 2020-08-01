const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

// Listen for tab click
tabItem.forEach(item => item.addEventListener('click', selectItem));

// Select Tab Content Item
function selectItem(e){
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border');
  // Get content
  const tabContentItems = document.querySelector(`#${this.id}-content`);
  tabContentItems.classList.add('show');
}

function removeBorder(){
  tabItem.forEach(item => item.classList.remove('tab-border'));
};

function removeShow(){
  tabContentItem.forEach(item => item.classList.remove('show'))
}
