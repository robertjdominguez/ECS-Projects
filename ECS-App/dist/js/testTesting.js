  function coinFlip() {
    // Get value of input
    let code = $('#code').val();

    // Check for starter code: nav
    var navCheck = (code.match(/nav/g) || []).length;
    if (navCheck > 0) {
      navCheck = true;
    } else {
      navCheck = false
    }

    // Check for structure: jumbotron, col-sm-4 x3, card x3
    var jumbo = (code.match(/jumbotron/g) || []).length;
    if (jumbo > 0) {
      jumbo = true;
    } else {
      jumbo = false
    }
    var columns = (code.match(/col/g) || []).length;
    if (columns >= 6) {
      columns = true;
    } else {
      columns = false
    }
    var cards = (code.match(/card/g) || []).length;
    if (cards > 0) {
      cards = true;
    } else {
      cards = false
    }

    if (jumbo == true && columns == true && cards == true) {
      structure = true;
    } else {
      structure = false
    }

    // Check for content: img x3
    var img = (code.match(/<img/g) || []).length;

    if (img >= 3) {
      img = true
    } else {
      img = false
    }

    // Make it look pretty
    $('#starterStatement').fadeOut();

    setTimeout(function() {
      roundOne();
    }, 1000)

    function roundOne() {
      $('#preLoader').fadeIn().delay(1000);
      $('#preLoader').fadeOut(1000);
      //If-else for pass fail, Test 1
      if (navCheck == true) {
        // pass
        $('#test1').html(`
          <h6 class="left-align green-text" id="test1">Test 1: Starter Code | Passed</h6>
          `).delay(2000).fadeIn(2000)
      } else {
        // fail
        $('#test1').html(`
          <h6 class="left-align red-text" id="test1">Test 1: Starter Code | Failed - You're missing something to get your navbar to work...check the starter code.</h6>
          `).delay(2000).fadeIn(2000)
      }

      // Test 2
      if (structure == true) {
        // pass
        $('#test2').html(`
          <h6 class="left-align green-text" id="test2">Test 2: Structure | Passed</h6>
          `).delay(2000).fadeIn(2000)
      } else {
        // fail
        $('#test2').html(`
          <h6 class="left-align red-text" id="test2">Test 2: Structure | Failed - The structure of this page isn't quite right. Check the numbrer of columns, cards, and jumbotrons.</h6>
          `).delay(2000).fadeIn(2000)
      }
      // Test 3
      if (img == true) {
        // pass
        $('#test3').html(`
          <h6 class="left-align green-text" id="test3">Test 3: Content | Passed</h6>
          `).delay(2000).fadeIn(2000)
      } else {
        // fail
        $('#test3').html(`
          <h6 class="left-align red-text" id="test3">Test 3: Content | Failed - Where are the pictures?! We need to see these animals. You don't have as many as you need.</h6>
          `).delay(2000).fadeIn(2000)
      }
    }
  }