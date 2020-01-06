<html>
  <link rel="stylesheet" href="html/JobList.css" />
  <div className="job-listing-container">
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
    $query = mysqli_query( $connection, "select * from emploi");
    if (mysqli_num_rows($query) > 0) {
      foreach ($query as $value) { ?>
       <!-- seulement afficher une image si l'annonce en contient une -->
      <div class="job-listing">
        <?php if($value["image"] !== "null") {?>
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
    </div>
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
</html>