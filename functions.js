var navLinks = document.getElementsByTagName("a");

		// loop through all the links and add an event listener
		for (var i = 0; i < navLinks.length; i++) {
			navLinks[i].addEventListener("click", function() {

				// remove the active class from all the links
				for (var j = 0; j < navLinks.length; j++) {
					navLinks[j].classList.remove("active");
				}

				// add the active class to the clicked link
				this.classList.add("active");
			});
		}
		