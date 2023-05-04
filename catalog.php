<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Horizon</title>
</head>

<body>
    <div class="nav-wrapper">
        <nav class="navbar">
            <a href="index.php"><img class="brandLogo" src="ICONES/NIGHT/LOGO.svg" alt="Company Logo">
            </a>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <ul class="nav no-search">
                <li class="nav-item"><a href="index.php#aboutUs">Overview</a></li>
                <li class="nav-item"><a href="#">About us</a></li>
                <li class="nav-item"><a href="catalog.php">Our product</a></li>
                <li class="nav-item"><a href="extra.php">Extra</a></li>
            </ul>
        </nav>
    </div>

    <section class="ourProduct">
        <a href="room.php?id=1" class="productDisplay">
            <h3>team suite</h3>
            <div style="background-image: url('IMG/team.webp');">
            </div>
        </a>
        <a href="room.php?id=2" class="productDisplay">
            <h3>lounge suite</h3>
            <div style="background-image: url('IMG/lounge.webp');">
            </div>
        </a>
        <a href="room.php?id=3" class="productDisplay">
            <h3>stream suite</h3>
            <div style="background-image: url('IMG/stream.webp');">
            </div>
        </a>
    </section>

    <footer>

        <p>
            <a href="terms.php">Terms</a>
        </p>
        <p>
            <a href="">Privacy</a>
        </p>

        <div class="bottomBrandLogo">
            <a href="index.php"><img src="ICONES/NIGHT/LOGO.svg" alt="Go Top"></a>
        </div>

        <p>
            <a href="FAQ.php">FAQ</a>
        </p>
        <p>
            <a href="">Contact us</a>
        </p>

    </footer>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script defer type="text/javascript" src="JS/script.js"></script>

</body>

</html>