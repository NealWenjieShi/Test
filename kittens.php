<?php
include("broilerplate.php");
?>

<main>
    <div id="btns">
        <div id="dropdown">
            <select name="filter" id="filter">
                <option value="allCats" id="allCats">All</option>
                <option value="british" id="british">British Shorhair</option>
                <option value="garfield" id="garfield">Garfield</option>

            </select>
            <button id="filterbtn" onclick="filterCat()">Filter</button>
        </div>
        <div id="search">
            <input id="searchbox" type="text" size="20" placeholder="Search here!">
            <button id="searchbtn" type="btn">Search</button>
        </div>
    </div>

    <div id="gridcontainer">

        <div class="griditem garfield">
            <div class="imagebox">
                <img src="" class="imgcat" alt="Sam">
            </div>
        </div>
        <div class="griditem garfield">
            <h2 class="kittenname"></h2>
            <h4 class="kittenbirthyear"></h4>
            <p class="kittendescription"></p>
            <p class="kittenprice"></p>
        </div>

        <div class="griditem garfield">
            <div class="imagebox">
                <img src="" class="imgcat" alt="Kimchi">
            </div>
        </div>
        <div class="griditem garfield">
            <h2 class="kittenname"></h2>
            <h4 class="kittenbirthyear"></h4>
            <p class="kittendescription"></p>
            <p class="kittenprice"></p>
        </div>

        <div class="griditem garfield">
            <div class="imagebox">
                <img src="" class="imgcat" alt="Rice">
            </div>
        </div>
        <div class="griditem garfield">
            <h2 class="kittenname"></h2>
            <h4 class="kittenbirthyear"></h4>
            <p class="kittendescription"></p>
            <p class="kittenprice"></p>
        </div>

        <div class="griditem british">
            <div class="imagebox">
                <img src="" class="imgcat" alt="Sunny">
            </div>
        </div>
        <div class="griditem british">
            <h2 class="kittenname"></h2>
            <h4 class="kittenbirthyear"></h4>
            <p class="kittendescription"></p>
            <p class="kittenprice"></p>
        </div>

        <div class="griditem british">
            <div class="imagebox">
                <img src="" class="imgcat" alt="Pudding">
            </div>
        </div>
        <div class="griditem british">
            <h2 class="kittenname"></h2>
            <h4 class="kittenbirthyear"></h4>
            <p class="kittendescription"></p>
            <p class="kittenprice"></p>
        </div>

        <div class="griditem british">
            <div class="imagebox">
                <img src="" class="imgcat" alt="Stone">
            </div>
        </div>
        <div class="griditem british">
            <h2 class="kittenname"></h2>
            <h4 class="kittenbirthyear"></h4>
            <p class="kittendescription"></p>
            <p class="kittenprice"></p>
        </div>
    </div>
</main>

<footer>
    <hr id="line2">
    <div id="copyright">
        <p>© Copy right 2022 Paws. All rights reserved.</p>
    </div>
</footer>

</body>

</html>