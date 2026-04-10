$(document).ready(function () {
  // api to get users
  $.getJSON(" https://randomuser.me/api/?results=3", function (data) {
    let users = data.results;
    users.forEach((user) => {
      const card = `
            <div class="testimonials-card">
            <img src="${user.picture.medium}" alt="${user.name.first}" />
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>"Great service! Helped me manage my finances easily.</p>
          </div>`;

      $(".testimonials-grid").append(card);
    });
  });
});
