<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Matthew Metsoja github profile, Matthew Metsoja on github and this is my front page mainly so that
    people may download the source code from my portfolio projects @ matthewmetsoja.com.">
    <meta name="author" content="Matthew Metsoja">

<!-- font-family: 'Source Code Pro', monospace; -->


    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet">

    <!-- font-family: 'Mansalva', cursive;
    font-family: 'Vibes', cursive; -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Mansalva|Vibes&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="style.css">
 
    <title>Matthew Metsoja GitHub</title>
</head>
<body>
        <div class="jumbotron jumbotron-fluid">
                <h1 class="display-1 text-center">Matthew Metsoja</h1>
                <p class="display-4 mt-4 text-light text-center vibe">Github repository links</p>
        </div>
    <div class="container-fluid intro">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8 py-4">
                    <p class="work">Just a little page to link all of my repositories for my portfolio projects as for 
                        some reason google hasn't been indexing and my github page hasnt been showing up in the search, 
                        so i thought id give this a try and index each one manually, so here goes.
                    </p>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
    
    <div class="container">
       
        <div class="row">
            
            <div class="col-md-6 col-lg-4 mb-3">
                <a class="portfolio-item d-block mx-auto" data-toggle="modal" data-target="#modal_1">
                  <div>
                      <img id="cms_front_cover" class="img-fluid" src="img/cms_frontcover.png">
                  </div>
                </a>
            </div>
            
            <div class="col-md-6 col-lg-4 mb-3">
                <a class="portfolio-item d-block mx-auto" data-toggle="modal" data-target="#modal_2">
                  <div>
                      <img id="clothing_front_cover" class="img-fluid" src="img/clothing_frontcover.jpg">
                  </div>
                </a>
            </div>

            <div class="col-md-6 col-lg-4 mb-3">
                <a class="portfolio-item d-block mx-auto" data-toggle="modal" data-target="#modal_3">
                  <div>
                      <img id="takeaway_front_cover" class="img-fluid" src="img/takeaway_frontcover.jpg" alt="">
                  </div>
                </a>
            </div>

        </div>
       
    </div>

        <footer class="container-fluid">
                <h1 class="py-2 text-center">Footer <i class="fas fa-gitter"></i></h1>
        </footer>
    </blockquote>
    <!-- <script src="script.js"></script> -->
</body>
</html>


style
{

    body{
        /* min-height: 1000px; */
        background-color: black;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Mansalva', cursive;
    }

    .vibe{
        font-family: 'Vibes', cursive;
        font-weight: 800;
    }

    .work{
    font-family: 'Source Code Pro', monospace;
    font-size: 1.3em;
    text-align: center;
    }

    .intro{
        border-bottom: 10px solid #ffbf00;
        color: white;
    
    }

    .jumbotron-fluid{
        background-color: black;
        color: #ffbf00;
        border-top: 10px solid #ffbf00;
        border-bottom: 10px solid #ffbf00
    }

    footer{
        position: relative;
        background-color: black;
        color: white;
        border-top: 10px solid #ffbf00;
        border-bottom: 10px solid #ffbf00;
        bottom:  -30vh
    }

}