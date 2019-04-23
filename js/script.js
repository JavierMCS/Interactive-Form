$('#name').focus(); //This is setting focus to the first text input
$('#other_title').hide(); //I am hidding the text input for other_title
/*
I am selecting the select id title.
Everytime the value changes, it is checking to see if it matches
to "other". If it does, show input text, if not, hide.
*/
$('#title').change(function () {
  if($('#title').val() === "other") {
      $('#other_title').show();
    } else {
      $('#other_title').hide();
    }
});

$('#design').change(function() {
  if($('#design').val === '')
})
