$(document).ready(function() {
    
  console.log("start")
  let user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)
  // console.log(user.email)
  console.log(user)

  if (!user) {
      console.log('no user')
      $('#signout').css('display', 'none')
      $('#myList').css('display', 'none')

  } else {
      console.log('there is a user')
      $('#welcome').text('Welcome ' + user.displayName )
      $('#login').css('display', 'none')
    }

  $('#signout').on('click', function(){
      localStorage.setItem('user', JSON.stringify(''))
      location.href = '/portfolio'
  })
})