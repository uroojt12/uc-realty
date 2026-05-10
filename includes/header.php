<!-- header -->
<header class="ease">
    <div class="topNav">
        <div class="contain-fluid">
            <div class="flex">
                <div class="colL">
                    <a href="tel:+(844) 331-5323">
                        <div class="img">
                            <img src="images/phone.png" alt="">
                        </div>
                        <span>+(844) 331-5323</span>
                    </a>
                    <a href="">
                        <div class="img">
                            <img src="images/mail.png" alt="">
                        </div>
                        <span>sales@mavleads.com</span>
                    </a>
                </div>
                <div id="lang" class="dropDown">
                    <div class="dropBtn">
                        <div class="ico">
                            <img src="images/us.svg" alt="">
                        </div>
                    </div>
                    <ul class="dropCnt">
                        <li class="active">
                            <a href="?">
                                <span>English</span>
                                <div class="ico">
                                    <img src="images/us.svg" alt="">
                                </div>
                            </a>
                        </li>
                        <li class="">
                            <a href="?">
                                <span>Vietnamese</span>
                                <div class="ico">
                                    <img src="images/Vietnam.png" alt="">
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="contain-fluid">
        <div class="logo">
            <a href="">
                <img src="images/logo.png" alt="">
            </a>
        </div>
        <div class="toggle"><span></span></div>
        <nav class="ease" nav="">
            <ul id="nav">
                <li class="">
                    <a href="index.php" class="<?= ($page == 'index' || $page == '') ? 'active' : '' ?>">Home</a>
                </li>
                <li class="">
                    <a href="about.php" class="<?= ($page == 'about') ? 'active' : '' ?>">About Us</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:void(0)">Services
                        <i class="fa fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li class="">
                            <a href="resident.php" class="<?= ($page == 'resident') ? 'active' : '' ?>">Residential</a>
                        </li>
                        <li class="">
                            <a href="commercial.php" class="<?= ($page == 'commercial') ? 'active' : '' ?>">Commercial</a>
                        </li>
                        <li class="">
                            <a href="mortgage.php" class="<?= ($page == 'mortgage') ? 'active' : '' ?>">Mortgage</a>
                        </li>
                        <li class="">
                            <a href="visa.php" class="<?= ($page == 'visa') ? 'active' : '' ?>">Visa</a>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a href="contact.php" class="<?= ($page == 'contact') ? 'active' : '' ?>">Contact Us</a>
                </li>
            </ul>

        </nav>
        <div class="clearfix"></div>
    </div>
</header>