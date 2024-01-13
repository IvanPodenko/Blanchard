document.querySelectorAll('.tab-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.tab-content').forEach(function (tabContent) {
      tabContent.classList.remove('tab-content-active');
    });

    document.querySelectorAll('.catalog__wrap-content-btn').forEach(function (btn) {
      btn.classList.remove('tab-btn-active');

      // Удаление класса span-active из всех span внутри кнопок
      btn.querySelectorAll('span').forEach(function(span) {
        span.classList.remove('span-active');
      });
    });

    // Добавление классов tab-btn-active и span-active
    event.currentTarget.classList.add('tab-btn-active');
    event.currentTarget.querySelector('span').classList.add('span-active'); // добавление класса span-active к span внутри текущей кнопки

    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
  });
});


// document.querySelectorAll('.tab-btn').forEach(function (tabsBtn) {
//   tabsBtn.addEventListener('click', function (event) {
//     const path = event.currentTarget.dataset.path;

//     document.querySelectorAll('.tab-content').forEach(function (tabContent) {
//       tabContent.classList.remove('tab-content-active');
//     });

//     document.querySelectorAll('.catalog__wrap-content-btn').forEach(function (btn) {
//       btn.classList.remove('tab-btn-active');
//     });

//     document.querySelectorAll('.catalog__wrap-content-text').forEach((span) => {
//       span.classList.remove('span-active');
//     })
//     event.currentTarget.classList.add('tab-btn-active');
//     event.currentTarget.classList.add('span-active');

//     document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
//   });
// });






