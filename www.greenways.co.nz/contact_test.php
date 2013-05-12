<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>

  <script type="text/javascript" src="http://localhost/greenways/contact/contact-form.js"></script>

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
          <a id="active" href="contact.html">Contact Us</a>
        </div>
      </div>
    </div>

    <div id="contentbody" style="float: left; margin-left: 10px;">

      <div id='cform' class='rounded_corner'>
        <!-- <div style="height: 100%; width: 100%; background: url('http://www.greenways.co.nz/images/temp/-cform.png'); color: #fff;"> -->
        <div id='contact_form'>
          <?php
            $contact_form = 1; // set desired form number.
            $contact_form_path = '/var/www/greenways/contact-files/'; // set path to /contact-files/ with slash on end.
            require $contact_form_path . 'contact-form-run.php';
          ?>

          <!-- <div style="float: left; height: 110px; width: 94px; margin-left: 20px; MARGIN-TOP: 22PX; COLOR: #fff; font-size: 21px;">
            <span style="margin-top: 0px; float: left;">NAME</span>
            <br style="clear: both;">
            <span style="margin-top: 11px; float: left;">EMAIL ADDRESS</span>
            <br style="clear: both;">
            <span style="margin-top: 11px; float: left;">PHONE NO.</span>
            <br style="clear: both;">
            <span style="margin-top: 11px; float: left;">MESSAGE</span>
          </div> -->

          <!-- Fast Secure Contact Form PHP plugin 3.0.4 - begin - FastSecureContactForm.com -->
          <!-- <div id="FSCForm1" style="width: 467px; position: absolute; top: 17px; right: 20px;">
            <form action="index.html#FSCForm1" id="fsc_form1" method="post">

              <div>
                <input type="hidden" name="fsc_CID" value="1" />
              </div>

              <div style="display: none;">
                <label for="fsc_ex_field1_1">Name</label>
              </div>
              <div style="margin:0;">
                <input style="border: none; height: 23px; width: 357px; float: right;" type="text" id="fsc_ex_field1_1" name="fsc_ex_field1" value=""  size="40" />
              </div>

              <div style="display: none;">
                <label for="fsc_ex_field1_2">Email</label>
              </div>
              <div style="margin:0;">
                <input style="border: none; height: 23px; width: 357px; margin-top: 8px; float: right;" type="email" id="fsc_ex_field1_2" name="fsc_ex_field2" value=""  size="40" />
              </div>

              <div style="display: none;">
                <label for="fsc_ex_field1_3">Phone</label>
              </div>
              <div style="margin:0;">
                <input style="border: none; height: 23px; width: 357px; margin-top: 8px; float: right;" type="text" id="fsc_ex_field1_3" name="fsc_ex_field3" value=""  size="40" />
              </div>

              <div style="display: none;">
                <label for="fsc_ex_field1_4">Message</label>
              </div>
              <div style="margin:0;">
                <textarea style="width: 100%; height: 106px; resize: none; background: #fff; border: none; font-family: arial;margin: 36px 0 0 0;float: right;" id="fsc_ex_field1_4" name="fsc_ex_field4"  cols="30" rows="10"></textarea>
              </div>

              <div style="margin:0;">
                <input type="hidden" name="fsc_action" value="send" />
                <input type="hidden" name="fsc_form_id" value="1" />
                <input type="submit" id="fsc-submit" style="position: absolute;bottom: -31px;right: -2px;border: none;  height: 23px;    background: #fff;" value="Send" />
              </div>

            </form>
          </div> -->
          <!-- Fast Secure Contact Form PHP plugin 3.0.4 - end - FastSecureContactForm.com -->

          <!--div style="float: left; height: 87px; margin-top: 17px; width:377px;">
          <input type="text" style="border: none; height: 23px; width: 377px">
          <input type="text" style="border: none; height: 23px; width: 377px; margin-top: 8px;">
          <input type="text" style="border: none; height: 23px; width: 377px; margin-top: 8px;"></div>
          <br style="clear: both;">
          <div style="width: 470px; height: 110px; margin: 12px auto 0 auto;">
          <textarea style="width: 466px; height: 106px; background: #fff; border: none; font-family: arial;"></textarea>
          </div>
          <div style="float: right;margin-top: 10px; margin-right: 19px;">
          <input type="submit" value="Send" style="background: #fff; height: 20px; border: none; cursor: pointer;"></div-->
        </div>
      </div>
    </div>

    <div id="contentboxes" style="float: right; margin-right: 10px; width: 450px;">
      <!-- <div style="margin: 0 0 10px 0; width: 450px; height: 117px; background: url('images/base/contentbox_tr_s.png'); float: left;">
        <div style="width: 450px; height: 117px; background: url('images/promotions/facebookdraw-small.png');">
          <div style="width: 280px; height: 117px; overflow: hidden;">
            <div style="margin: 15px; color: #00A82E; line-height: 30px; font-size: 22px;"> <b style=color:purple>Grapes in season!</b>
              This means brand new grapes and brand new juice. <i>9 hectares of vineyard are now organic.</i> <b>:)</b>
            </div>
          </div>
        </div>
      </div>
      <br /> -->

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
          <div style="width: 170px; float: left;">+64 9 9085998</div>
        </div>
      </div>
    </div>
    <br />
    
    <div class="rounded_corner" style="position: relative; margin-right: 10px; width: 450px; height: 384px; background: url('images/base/contactus.jpg'); float: left;"></div>
    </div>

    <br style="clear: both;" />

    <div id="footer">
      COPYRIGHT 2011 GREENWAYS PURE FRUIT JUICES LIMITED. ALL RIGHTS RESERVED.
      <a href="http://www.iguchiandco.com/" target="_blank" style="color: #fff; text-decoration: none;">SITE BY IGUCHI & CO</a>
      .
    </div>

  </div>
</body>
</html>