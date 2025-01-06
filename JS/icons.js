
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('facebookIcon').addEventListener('click', function() {
        window.open('https://www.facebook.com/advoize19/?_rdr', '_blank');
    });

    document.getElementById('instagramIcon').addEventListener('click', function() {
        window.open('https://www.instagram.com/advoize19/', '_blank');
    });

    document.getElementById('linkedinIcon').addEventListener('click', function() {
        window.open('https://in.linkedin.com/in/advoize', '_blank');
    });

    document.getElementById('emailIcon').addEventListener('click', function() {
        window.location.href = 'mailto:gskinfra@gmail.com';
    });
});
