var click = 0;
$("body")
  .on('click', ".btn", function () {
    click++
    /* alert("abc") */
    $('.container').append(`
    <div class="row align-items-center">
    <div class="col-5">
      <div class="form-group">
    <label for="title_${click}">Enter title</label>
    <input type="text" class="form-control border-left-0 border-right-0 border-top-0" id="title_${click}" aria-describedby="title">
  </div>
    </div>
    <div class="col-5">
      <div class="form-group">
    <label for="member_${click}">Enter team member</label>
    <input type="text" class="form-control border-left-0 border-right-0 border-top-0" id="member_${click}">
  </div>
    </div>
    <div class="col-2 delete cursor-pointer text-center">
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg>
    </div>
  </div>
  `)
  })
  .on('click', '.delete', function () {
    $(this).parent().remove()
  })
