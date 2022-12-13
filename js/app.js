$(document).ready(function () {
  //rearranger
  $(".selects").click(function () {
    $(".options").slideToggle(200);
  });

  //search
  //   $("#search").keyup(function () {
  //     var value = $(this).val().toLowerCase();
  //     $(".card-section .card").filter(function () {
  //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  //     });
  //   });

  //  get users data
  let users = [];

  $.ajax({
    type: "GET",
    url: "http://jsonplaceholder.typicode.com/users",
    success: function (data) {
      users = data;

      //ACS
      $("#search").keyup(function () {
        let value = $(this).val().toLowerCase();
        searchedUsers = [];
        users.forEach((user) => {
          if (user.name.toLowerCase().search(value) > -1) {
            searchedUsers.push(user);
          }
        });
        $(".card").remove();
        searchedUsers.forEach((user) => {
          $(".card-section").append(`
            <div class="card">
                <div class="image">
                    <img src="https://i.pravatar.cc/300" alt="" />
                </div>
                <div style="padding: 10px">
                    <div class="name">
                    <h3>${user.name}</h3>
                    <h6>@${user.username}</h6>
                    </div>
                    <div class="catchphrase">"${user.company.catchPhrase}"</div>
                    <hr />
                    <div class="info">
                    <div class="email flex-row">
                        <span><i class="ri-mail-line"></i></span>
                        <p>${user.email}</p>
                    </div>
                    <div class="address flex-row">
                        <span><i class="ri-map-pin-line"></i></span>
                        <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    </div>
                    <div class="phone flex-row">
                        <span><i class="ri-phone-line"></i></span>
                        <p>${user.phone}</p>
                    </div>
                    <div class="website flex-row">
                        <span><i class="ri-signal-tower-fill"></i></span>
                        <p>${user.website}</p>
                    </div>
                    <div class="company-name flex-row">
                        <span><i class="ri-briefcase-4-line"></i></span>
                        <p>${user.company.name}</p>
                    </div>
                    <div class="company-bs flex-row">
                        <span><i class="ri-building-2-line"></i></span>
                        <p>${user.company.bs}</p>
                    </div>
                    </div>
                </div>
            </div>
        `);
        });
        if (searchedUsers.length <= 0) {
            console.log(searchedUsers.length);
          $(".no-data").show();
        } else {
          $(".no-data").hide();
        }
      });

      //ACS
      $(".option:first-child").click(function () {
        users.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
        $(".card").remove();
        users.forEach((user) => {
          $(".card-section").append(`
            <div class="card">
                <div class="image">
                    <img src="https://i.pravatar.cc/300" alt="" />
                </div>
                <div style="padding: 10px">
                    <div class="name">
                    <h3>${user.name}</h3>
                    <h6>@${user.username}</h6>
                    </div>
                    <div class="catchphrase">"${user.company.catchPhrase}"</div>
                    <hr />
                    <div class="info">
                    <div class="email flex-row">
                        <span><i class="ri-mail-line"></i></span>
                        <p>${user.email}</p>
                    </div>
                    <div class="address flex-row">
                        <span><i class="ri-map-pin-line"></i></span>
                        <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    </div>
                    <div class="phone flex-row">
                        <span><i class="ri-phone-line"></i></span>
                        <p>${user.phone}</p>
                    </div>
                    <div class="website flex-row">
                        <span><i class="ri-signal-tower-fill"></i></span>
                        <p>${user.website}</p>
                    </div>
                    <div class="company-name flex-row">
                        <span><i class="ri-briefcase-4-line"></i></span>
                        <p>${user.company.name}</p>
                    </div>
                    <div class="company-bs flex-row">
                        <span><i class="ri-building-2-line"></i></span>
                        <p>${user.company.bs}</p>
                    </div>
                    </div>
                </div>
            </div>
        `);
        });
      });

      // DESC
      $(".option:nth-child(2)").click(function () {
        users.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
        $(".card").remove();
        users.forEach((user) => {
          $(".card-section").append(`
            <div class="card">
                <div class="image">
                    <img src="https://i.pravatar.cc/300" alt="" />
                </div>
                <div style="padding: 10px">
                    <div class="name">
                    <h3>${user.name}</h3>
                    <h6>@${user.username}</h6>
                    </div>
                    <div class="catchphrase">"${user.company.catchPhrase}"</div>
                    <hr />
                    <div class="info">
                    <div class="email flex-row">
                        <span><i class="ri-mail-line"></i></span>
                        <p>${user.email}</p>
                    </div>
                    <div class="address flex-row">
                        <span><i class="ri-map-pin-line"></i></span>
                        <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    </div>
                    <div class="phone flex-row">
                        <span><i class="ri-phone-line"></i></span>
                        <p>${user.phone}</p>
                    </div>
                    <div class="website flex-row">
                        <span><i class="ri-signal-tower-fill"></i></span>
                        <p>${user.website}</p>
                    </div>
                    <div class="company-name flex-row">
                        <span><i class="ri-briefcase-4-line"></i></span>
                        <p>${user.company.name}</p>
                    </div>
                    <div class="company-bs flex-row">
                        <span><i class="ri-building-2-line"></i></span>
                        <p>${user.company.bs}</p>
                    </div>
                    </div>
                </div>
            </div>
        `);
        });
      });

      users.forEach((user) => {
        $(".card-section").append(`
            <div class="card">
                <div class="image">
                    <img src="https://i.pravatar.cc/300" alt="" />
                </div>
                <div style="padding: 10px">
                    <div class="name">
                    <h3>${user.name}</h3>
                    <h6>@${user.username}</h6>
                    </div>
                    <div class="catchphrase">"${user.company.catchPhrase}"</div>
                    <hr />
                    <div class="info">
                    <div class="email flex-row">
                        <span><i class="ri-mail-line"></i></span>
                        <p>${user.email}</p>
                    </div>
                    <div class="address flex-row">
                        <span><i class="ri-map-pin-line"></i></span>
                        <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    </div>
                    <div class="phone flex-row">
                        <span><i class="ri-phone-line"></i></span>
                        <p>${user.phone}</p>
                    </div>
                    <div class="website flex-row">
                        <span><i class="ri-signal-tower-fill"></i></span>
                        <p>${user.website}</p>
                    </div>
                    <div class="company-name flex-row">
                        <span><i class="ri-briefcase-4-line"></i></span>
                        <p>${user.company.name}</p>
                    </div>
                    <div class="company-bs flex-row">
                        <span><i class="ri-building-2-line"></i></span>
                        <p>${user.company.bs}</p>
                    </div>
                    </div>
                </div>
            </div>
        `);
      });
    },
    error: function (data) {
      alert("faild to load users data");
    },
  });
});
