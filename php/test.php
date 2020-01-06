<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="html/JobList.css" />
  <link rel="stylesheet" href="html/style.css" />
</head>

<body>
  <!-- Barre de navigation -->
  <?php readfile("html/NavBar.html"); ?>

  <div class="background">
    <div class="homepage-header">
      <div style="padding-top:20px">
        <div style="color:#323232; font-weight:500;font-size:20px">
          What could you be working on?
        </div>
        <div style="font-size:100px; color:#c3ddad">
          <span style="font-weight:bold; color:white">Jobs</span> for Designers
        </div>
      </div>
      <div>
        <div class="large-button">
          <div class="large-button-contents">
            <div style="font-weight:bold">
              Post a Job + Find Designer
            </div>
            <div style="color:#828f73; font-weight:600">
              375$ for 30 days
            </div>
          </div>
        </div>
        <div class="follow">
          <div style="display: flex; align-items:top; padding-right:20px">
            <!-- icône feed RSS -->
            <img alt="" src="images/rss_icon.svg" height="20px" class="icon-white" />{" "} Jobs RSS
          </div>
          <div style="display:flex; align-items:top; padding-right:20px">
            <!-- icône Twitter  -->
            <img alt="" src="images/twitter_icon.svg" height="20px" class="icon-white" />@dribblejobs
          </div>
        </div>
      </div>
    </div>

    <div style="display:flex; justify-content:space-between">
      <!-- Liste des offres -->
      <div class="job-listing-container">
        <div style="color:#a1a19f; padding-left:20px; padding-bottom:20px">
          NOW HIRING
        </div>
        <div>
          <?php
          $connection = mysqli_connect("34.66.140.161", "root", "!bqzkBMaV97(5*Z>", "test");
          if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
          }
          $query = mysqli_query($connection, "select * from emploi");
          if (mysqli_num_rows($query) > 0) {
            foreach ($query as $value) { ?>
              <!-- seulement afficher une image si l'annonce en contient une -->
              <div class="job-listing">
                <?php if ($value["image"] !== "null") { ?>
                  <div class="thumbnail">
                    <img src="images<?php echo $value["image"] ?>" class="thumbnail-image" />
                  </div>
                <?php } ?>
                <div>
                  <div style="width:850px">
                    <div class="header1"> <?php echo $value["company"] ?></div>
                    <div class="header2"> <?php echo $value["job_title"] ?></div>
                  </div>
                </div>
                <div class="header3"> <?php echo $value["location"] ?></div>
              </div>
          <?php
            }
          } else {
            echo "0 results";
          }
          mysqli_close($connection);
          ?>
        </div>
      </div>

      <!-- Liste des filtres -->
      <div>
        <div class="filter-box">
          <span style="color:#ffffff; font-weight:bold">ONLY</span>
          <div class="filter-checkbox">
            <input type="checkbox" />
            <div style="padding-left:5px"> Teams</div>
          </div>
          <span style="color:#ffffff; font-weight:bold">LOCATION</span>
          <div class="filter-checkbox">
            <input type="checkbox" />
            <div style="padding-left:5px">Remote / Anywhere</div>
          </div>
          <div class="filter-input-box">
            <img alt="" src="images/map-placeholder.svg" height="20px" class="filter-icon" />
            <input type="text" placeholder="All" class="filter-input" />
          </div>
          <div style="color:#8c8c8c">Enter a city, state or coutnry</div>
          <div class="search-button">Search</div>
        </div>
        <div class="blurb">
          Hiring designers? <a href="link">Create a team</a> to get the most
          exposure for your jobs
        </div>

        <div class="blurb" style="margin-top:60px">
          <span style="color:#000000">Previously</span> on Dribble
        </div>

        <div style="margin-top:20px">
          <img alt="facebook" src="images/facebook.png" height="70px" />
          <img alt="microsoft" src="images/microsoft.png" height="70px" />
        </div>
      </div>
    </div>
  </div>
  </div>
</body>

</html>