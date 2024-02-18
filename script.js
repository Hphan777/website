
/* scroll function for sections */
function scroll(event){ 
    var sections = document.querySelectorAll('#container a');
    var scrollPos = window.scrollY || document.body.scrollTop; // get the scroll position
    
    for( var i = 0; i < sections.length; i++ ){ /* loop the sections*/
      var currLink = sections[i];  /* get the current section */
      var val = currLink.getAttribute('href'); // get the href of the current section
      var refElement = document.querySelector(val); // get the element by the href
        if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){ // check if the current section is in the viewport 
          document.querySelector('ul li a').classList.remove('active'); // remove the class from the previous section
          currLink.classList.add('active'); // add the class to the current section
        }else{ // if the section is not in the viewport
           currLink.classList.remove('active'); // remove the class from the current section
         }
    }
                                                             
      
  };
  
  window.document.addEventListener('scroll', scroll ); // add the event listener to the window object
