import Cookies from 'js-cookie';

function checkReferrerAndSetCookie() {
  const referrer = document.referrer;
  if (referrer.includes("facebook.com")) {
    Cookies.set('referredBy', 'Facebook', { expires: 7 }); // Expires in 7 days
    console.log('Cookie set for Facebook referral');
  } else {
    console.log('Not referred by Facebook');
  }
}
