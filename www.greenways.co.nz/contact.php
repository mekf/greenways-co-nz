<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

  <script type="text/javascript" src="http://greenways.co.nz/contact-files/contact-form.js"></script>

  <meta charset="UTF-8" />

  <link rel="stylesheet" type="text/css" media="all" href="internal/css/global.css" />

  <title>Greenways - Contact Us</title>

  <meta name="Keywords" content="Juice, Greenways, Healthy, Organic, Grape, Apple, Feijoa, Orange">
  <meta name="Description" content="Locally grown goodness, squeezed and freshly bottled for your fruity lifestyle. Greenways is proud to be New Zealand owned since 1956. Our philosophy is simplicity, we do not add any preservatives or colourings, we let nature do the work for us in creating these great flavours for your enjoyment.">

  <link type="text/plain" rel="author" href="http://www.greenways.co.nz/humans.txt" />
  
  <script type="text/javascript" src="http://www.greenways-sandbox.tk/contact-files/contact-form.js"></script>
  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-40754225-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
</head>

<body>
  <div class="wrapper">

    <div id="header">
      <a id="logo" href="index.html"></a>

      <div id="navigation">
        <div class="socialbtns">
          <a id="fb" target="_blank" href="https://www.facebook.com/GreenwaysJuice"></a>
          <a id="tw" target="_blank" href="http://twitter.com/greenwaysjuice"></a>
        </div>
        <div class="navlist">
          <a href="index.html">Home</a>
          <a href="products/products.html">Our Products</a>
          <a href="locations.html">Where To Buy</a>
          <a href="about.html">About Greenways</a>
          <a id="active" href="contact.php">Contact Us</a>
        </div>
      </div>
    </div>

    <div id="contentbody" style="float: left; margin-left: 10px;">
      <div id='cform' class='rounded_corner'>
        <div id='contact_form'>
          <?php
            $contact_form = 1; // set desired form number.
            $contact_form_path = '/home/minha/greenways-nz/contact-files/'; // set path to /contact-files/ with slash on end.
            require $contact_form_path . 'contact-form-run.php';
          ?>
        </div>
      </div>
    </div>

    <div id="contentboxes" style="float: right; margin-right: 10px; width: 450px;">
      <div id='contact_details' class='rounded_corner'>
        <div style="margin: 10px;">
          <h3>Contact Us</h3>
          <div style="margin-top: 30px;">
            <div style="width: 66px; float: left; color: #00a210;">
              MOBILE.
              <br />
              <br />
              ADDRESS
            </div>
            <div style="width: 170px; float: left;">
              +64 (0)21-051-3712
              <br />
              <br />
              Greenways Pure Fruit Juices
              <br />
              4 Domain Road
              <br />
              PANMURE
              <br />
              AUCKLAND
            </div>
            <div style="width: 66px; float: left; color: #00a210;">PHONE/FAX.</div>
            <div style="float: left;">+64 9 9085998</div>
          </div>
        </div>
      </div>
      <br />
    
      <div class="rounded_corner" style="position: relative; margin-right: 10px; width: 450px; height: 384px; background: url('images/base/contactus.jpg'); float: left;"></div>
    </div>

    <br style="clear: both;" />

    <div id="footer">
      COPYRIGHT 2011 GREENWAYS PURE FRUIT JUICES LIMITED. ALL RIGHTS RESERVED.
      <a href="http://www.iguchiandco.com/" target="_blank" style="color: #fff; text-decoration: none;">ORIGINAL SITE BY IGUCHI & CO</a>
      .
    </div>

  </div>
</body>
</html>