(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : false
    });
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

//********booking Form Section */
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the email address from the form
    const email = document.getElementById('email').value;

    // Display the thank you popup
    const popup = document.getElementById('thankYouPopup');
    const emailSpan = document.getElementById('emailAddress');
    emailSpan.textContent = email;
    popup.style.display = 'flex';

    // Close the popup when clicking the close button
    document.getElementById('close').addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Optionally, you can add code here to handle form submission, such as sending the data to a server.
});

//*****Blog navigation */
document.querySelectorAll('.page-link').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjusts for the height of the fixed navigation bar
            behavior: 'smooth' // Enables smooth scrolling
        });
    });
});


//******** Contact section ****** */
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('-7puQ9w9wja02eQTu');
})();
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_h3o76q3", "template_2ujvk4d", {
        name: name,
        email: email,
        subject: subject,
        message: message
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('status-message').textContent = 'Message sent successfully!';
        document.getElementById('status-message').style.color = 'green';
        // Clear form fields
        document.getElementById('contact-form').reset();
    }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('status-message').textContent = 'Failed to send message. Please try again.';
        document.getElementById('status-message').style.color = 'red';
    });
});

//*****Comment section */
function submitComment() {
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput.trim() !== "") {
        // Add comment to the comment list
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.textContent = commentInput;
        document.getElementById('commentsList').appendChild(commentItem);

        // Clear the comment input field
        document.getElementById('commentInput').value = '';

        // Show the popup
        showPopup();
    } else {
        alert("Please write a comment before submitting.");
    }
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
 